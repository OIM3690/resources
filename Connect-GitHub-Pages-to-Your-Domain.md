# Process for setting up github pages with your domain

1. Domain Provider DNS Settings (after acquiring a domain): 
   1. Login to NameCheap.com (or any domain provider website where you purchase/get your domain from). Note: The following terms used in different websites may vary slightly.
   2. Navigate to **Account** - **dashboard**.
   3. Click on **Domain List**.
   4. Click the **Manage** button next to your domain. (The button could be under "Quick Links".)
   5. Select **Advanced DNS** tab.
   6. Add a DNS record (if there is a **CNAME** record with Host "**www**", change it to): 
   	    > **Type**: `CNAME` | **Host**: `www` | **Value**/**ANSWER**: *yourgithubid*.github.io | **TTL**: `Automatic` (or use the default value)
   7. Click **Save**. 
2. GitHub Repository Pages Settings (after adding *index.html* to the repository): 
   1. If there is repository named ***yourgithubid*.github.io** in your GitHub profile - it was probably automatically created by NameCheap.com when you got domain from it, **delete** it.
   2. Go to GitHub porject repository page. 
   3. Click on **Settings**.
   4. Click on **Pages** on the left panel.
   5. For **Branch** (not Source), select `main`. Click **Save**.
   6. For Costom domain, enter `www.yourwebsitedomain.me` (if your domain is *yourwebsitedomain.me*.) Click **Save**.
3.  Enjoy your first website!
