# Sanity CMS Integration for Sound Sutraa

This project now includes a complete Sanity CMS setup for managing blog posts.

## 1. Setup Sanity Studio

1.  **Install Sanity CLI** (if not already installed):
    ```bash
    npm install -g sanity@latest
    ```
2.  **Initialize the project**:
    - Go to the `studio` directory: `cd studio`
    - Run: `sanity init` (This will link the studio to your Sanity account)
    - If it asks to create new project, say yes.
3.  **Configure Project ID**:
    - Once initialized, you will get a Project ID.
    - Update `projectId` in these files:
        - `studio/sanity.config.js`
        - `studio/sanity.cli.js`
        - `js/sanity-client.js` (line 4)

## 2. Running the CMS Locally

1.  In the `studio` directory, run:
    ```bash
    npm install
    npm run dev
    ```
2.  Open `http://localhost:3333` to access the Sanity Studio.
3.  Add an **Author**, a **Category**, and then create your first **Blog Post**.
4.  Make sure to **Publish** your post.

## 3. Frontend Integration

The blogs will now automatically load from Sanity on the following pages:
- `blog.html`: Fetches all published posts.
- `post.html`: A dynamic template that displays post content based on the slug.

### How it works:
- If `SANITY_PROJECT_ID` in `js/sanity-client.js` is set to your actual ID, the site will fetch real-time data from Sanity.
- If no ID is set, `blog.html` will fall back to showing the hardcoded demo posts.

## 4. Deploying Sanity

When you are ready to go live:
1.  Run `npm run deploy` inside the `studio` folder.
2.  Add your website URL (e.g., `https://www.soundsutraa.com`) to the **CORS settings** in your Sanity Management Dashboard (`manage.sanity.io`) so the frontend can fetch data.
