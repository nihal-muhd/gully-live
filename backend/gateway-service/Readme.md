**GraphQL**

From below example:

streams is array, each object inside array is item.
{
"data": {
"streams": [
{
"id": "1",
"title": "Gully Cricket Match"
},
{
"id": "2",
"title": "Football Evening Match"
}
]
}
}

Case 1:
streams: [StreamType] -->Both array and items can be null.

Case 2:
streams: [StreamType!] --> Array can be null.Items cannot be null.

Case 3:
streams: [StreamType!]! -->Array cannot be null.Items cannot be null.
