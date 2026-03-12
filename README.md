1. Dianne Mantala
2. 
3. ## Best Practices Implementation
4. **1. Environment Variables:**
5. - Why did we put `BASE_URI` in `.env` instead of hardcoding it?
6. - Answer: Its better to put the BASE_URI ing .env because we can change the URI in different environments without modifying the codes. Also, it keeps sensitive settings separate from the codebase and makes deployment easier.
7. **2. Resource Modeling:**
8. - Why did we use plural nouns (e.g., `/dishes`) for our routes?
9. - Answer: It makes the APIS predictable and intuitive. like /dishes respresents as a collection of dish resources. 
10. **3. Status Codes:**
11. - When do we use `201 Created` vs `200 OK`?
12. - Answer: We used 201 when a new resource successfully created and should include in the resource body. While 200 used when operations/requests was succeeds but doesn't create any new resources.

13. - Why is it important to return `404` instead of just an empty array or a generic error?
14. - Answer: Its important to return 404, so it makes easier to the client to identify whether the   error is in the id/route instead of returned the 200 or empty that has no results/empty. 
15. **4. Testing:**
16. - (Paste a screenshot of a successful GET request here)

17. - "Why did I choose to Embed the [Review/Tag/Log]?"
    I choose using the embedded in transactions because they're always read together and stay small. One query gets everything fast.
18. - "Why did I choose to Reference the [Chef/User/Guest]?"
    For the Users I choose a referenced because one user has many transactions and needs independent queries. Keeps documents scalable.


Securing API

1. Authentication vs Authorization 
What is the difference between Authentication and Authorization in our
code?
Answer: Authentication is the process of verifying if your a human user or a device. indeed who or what it claims to be. It is the "identity" phase of the transaction. While authorization is the process of determining what the user is permitted to do or which resources it is allowed to access. In short, authentication verifies your identity (login). authorization checks your permissions (admin only routes).

2. Security (bcrypt) 
Why did we use bcryptjs instead of saving passwords as plain text in
MongoDB?
Answer: If we use MongoDB, in storing passwords in plain text is a critical security failure. If a database is breached, plain text passwords allow attackers immediate access to all user accounts. So the web developer commonly used bcryptjs to prevent those problems.

3. JWT Structure 
What does the protect middleware do when it receives a JWT from the
client?
Answer:  When the protect middleware receives a JWT from the client, it:
* It retrieves the token from the request header.
* It uses a secret key to verify the signature. If the signature is valid, the server knows the token has not been        tampered with.
* It decodes the payload to identify the user (usually via a user ID).
* It checks if the token has expired.
* I