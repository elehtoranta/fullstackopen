```mermaid
sequenceDiagram
  participant client
  participant server

  client->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  activate server
  server-->>client: JSON file (201)
  deactivate server
```
