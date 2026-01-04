# Decap CMS Setup Guide

This guide will help you set up Decap CMS (formerly Netlify CMS) for your NQBlade website.

## What's Already Done

✅ Decap CMS files have been created in `public/admin/`
✅ FAQ data structure has been updated to work with Decap CMS
✅ FAQ component has been updated to handle the new structure

## Next Steps

### 1. Push to GitHub

Make sure your project is in a Git repository and push it to GitHub:

```bash
git add .
git commit -m "Add Decap CMS integration"
git push origin main
```

### 2. Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com) and click "New site from Git"
2. Select GitHub and choose your repository
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (or `out` if using static export)
4. Click "Deploy site"

### 3. Enable Netlify Identity

1. In your Netlify site dashboard, go to **Settings > Identity**
2. Click **Enable Identity service**
3. Under **Registration preferences**, choose:
   - **Open** - Anyone can sign up (for testing)
   - **Invite only** - Only invited users can access (recommended for production)
4. (Optional) Enable external providers (Google, GitHub, etc.) if desired
5. Scroll down to **Services > Git Gateway** and click **Enable Git Gateway**

### 4. Access the CMS

1. Visit your deployed site at `https://your-site.netlify.app/admin`
2. You should see the Decap CMS login screen
3. Sign up or log in with your credentials
4. You can now edit FAQ items!

## Local Development

To test the CMS locally (without Git Gateway):

1. Edit `public/admin/config.yml`
2. Change the backend from `git-gateway` to `test-repo`:
   ```yaml
   backend:
     name: test-repo
   ```
3. Visit `http://localhost:3000/admin` in your browser
4. Note: You won't be able to save changes locally, but you can see how the CMS looks

## FAQ Management

The CMS is configured to manage FAQ items in `data/faq.json`. You can:

- Add new FAQ items
- Edit existing questions and answers
- Reorder items using the "Order" field
- Delete items

Changes will be committed directly to your Git repository and trigger a new Netlify deployment.

## Troubleshooting

### CMS not loading

- Make sure Netlify Identity is enabled
- Check that Git Gateway is enabled
- Verify the branch name in `config.yml` matches your default branch

### Can't save changes

- Ensure you're logged in with a Netlify Identity account
- Check that Git Gateway has proper permissions
- Verify your Netlify site has access to your GitHub repository

### Changes not appearing on site

- Wait for Netlify to rebuild (usually takes 1-2 minutes)
- Check the Netlify deploy log for errors
- Verify the JSON structure is valid

## File Structure

```
public/
  admin/
    index.html          # Decap CMS interface
    config.yml          # CMS configuration
  netlify-identity-redirect.html  # Redirect helper
data/
  faq.json             # FAQ data (managed by CMS)
```

## Additional Resources

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Netlify Identity Documentation](https://docs.netlify.com/visitor-access/identity/)
- [Git Gateway Documentation](https://docs.netlify.com/visitor-access/git-gateway/)
