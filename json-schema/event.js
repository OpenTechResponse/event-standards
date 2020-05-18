{
    "$id": "http://opentechresponse/api/json-schema/event.schema.json",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "Representation of a volunteer event.",
    "type": "object",
    "required": [
        "@context",
        "email",
        "href",
        "scope",
        "display_name",
        "description",
        "begin_date",
        "end_date"
    ],
    "properties": {
        "@context": {
            "type": "string",
            "description": "JSON-LD context for the volunteer event resource type.",
            "const": "http://opentechresponse.com/api/json-ld/event"
        },
        "slug": {
            "type": "string",
            "description": "Suggested URL segment name for indexing, re-publication, or other purposes."
        },
        "email": {
            "type": "string",
            "description": "An email address to contact for questions, comments, or other communications regarding the volunteer event.",
            "format": "email"
        },
        "href": {
            "type": "string",
            "description": "The URI of the volunteer event resource. Related event resources MUST reference the event using this URI.",
            "format": "uri"
        },
        "scope": {
            "type": "string",
            "description": "Regional scope of the volunteer event. For example, 'global'."
        },
        "display_name": {
            "type": "string",
            "description": "A string to display to indicate the name of the volunteer event in a user interface."
        },
        "description": {
            "type": "string",
            "description": "A brief description of the volunteer event."
        },
        "begin_date": {
            "type": "string",
            "description": "The starting date of the event.",
            "format": "date-time"
        },
        "end_date": {
            "type": [
                "string",
                "null"
            ],
            "description": "The ending date of the event. For some events, the ending date may not be clear at the time of initial publishing due to the circumstances associated with the event. In that case, the value of this property may be 'null'.",
            "format": "date-time"
        }
    }
}
