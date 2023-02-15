![User interface o maturita book](https://user-images.githubusercontent.com/56836089/219067794-2dda270a-4b62-46cc-8b9b-ba7e0e4965ed.png)

# Maturita book
Next.js firebase powered website, for my school. It shows all books in the reading list for graduation, and lets the users rank them by liking books

# Česká verze
Next.js a firebase web-aplikace, pro mojí školu, která zobrazuje všechny knížky na maturitní četbu, a dovoluje uživatelům přidávat komentáře a hodnotit knížky, aby pomohli ostatním se rozhodnout kterou knížku si vybrat.

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
2. Create a new file in the root directory called `env.local`
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
