import axios from "axios";

export const streamResolvers = {
  Query: {
    streams: async () => {
      const [streamResponse, viewerResponse] = await Promise.all([
        axios.get("http://localhost:5001/streams"),
        axios.get("http://localhost:5002/viewers"),
      ]);

      const streams = streamResponse.data;
      const viewers = viewerResponse.data;

      return streams.map((stream: any) => {
        const viewer = viewers.find((v: any) => v.streamId === stream.id);

        return {
          ...stream,
          viewerCount: viewer?.viewerCount ?? 0,
        };
      });
    },

    stream: async (_: any, args: { id: string }) => {
      const [streamResponse, viewerResponse, commentResponse] =
        await Promise.all([
          axios.get(`http://localhost:5001/streams/${args.id}`),
          axios.get(`http://localhost:5002/viewers/${args.id}`),
          axios.get(`http://localhost:5003/comments/${args.id}`),
        ]);

      return {
        ...streamResponse.data,
        viewerCount: viewerResponse.data.viewerCount,
        comments: commentResponse.data,
      };
    },
  },
};
