# Maturita book
*Next.js firebase powered website, for my school. It shows all books in the reading list for graduation, and lets the users rank them by liking books*
# Main Page
![image](https://user-images.githubusercontent.com/56836089/135150384-3dc22a4f-e41f-4acb-be1a-6a468b6bccf1.png)

# Page for individual book
![image](https://user-images.githubusercontent.com/56836089/135150985-26905422-eee7-4f1a-a44f-3550e0a7befc.png)

<p align="center">
  I know it's kinda blank, but I plan to add comments in the near future 
</p>

# TO-DO List
- [x] Extracted book list from PDF to JSON
- [x] Firebase Setup
- [x] Book Page
- [x] Main Page
- [x] Login
- [x] Liking books
- [x] Sorting and searching
- [x] Comments
- [x] Optimizing for database reads
- [ ] Ability to remove and edit comments

# How to run?
1. `git clone https://github.com/Kendy205/maturita-book`
2. Create a new file in `src/lib` called `env.js`
    Put your firebase credentials in like this:
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
    NEXT_PUBLIC_FIREBASE_DATABASE_URL=
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
    NEXT_PUBLIC_FIREBASE_APP_ID=
    ```
3. `npm install`
4. `npm run dev`
