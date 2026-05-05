## HTTP Methods & Idempotency — Notes

### Idempotent (same request → same result, no extra side effects)

* GET → fetch data
* PUT → replace/update resource (same data → same state)
* DELETE → delete resource (repeat has no additional effect)
* HEAD → same as GET but no response body
* OPTIONS → returns allowed methods / capabilities

---

### Non-Idempotent

* POST → create resource (repeat → multiple entries)
* PATCH → partial update (generally not idempotent, depends on implementation)

---

### HEAD Method

* Same as GET but returns only headers
* No response body
* Used for:

  * Checking resource existence
  * Getting metadata (size, last-modified, etc.)

---

### OPTIONS Method

* Returns allowed HTTP methods for a resource
* Used for:

  * API capability discovery
  * CORS preflight requests

---

### Summary

* Idempotent: GET, PUT, DELETE, HEAD, OPTIONS
* Non-idempotent: POST, PATCH
