# Process for setting up github pages with your domain

1. Domain Provider DNS Settings (after purchasing a domain): 
   1. Go to namecheap.com(or any domain provider website where you purchase/get your domain from).
   2. Login, go to **Account** - **dashboard**.
   3. Go to **DomainList**
   4. Click **manage** button
   5. Click **Advanced DNS** tab
   6. Add one DNS record (if there is a **CNAME** record with Host "**www**", change it to): 
   	    > Type: CNAME Record | Host: www | Value: *yourgithubid*.github.io. | TTL: Automatic
   7. Click Save. 
2. GitHub Repository Pages Settings (after adding *index.html* to the repository): 
   1. If there is repository named ***yourgithubid*.github.io** in your GitHub profile - it is probably automatically created by NameCheap when you got domain from it - delete it.
   2. Go to GitHub porject repository page. 
   3. Click **Settings**.
   4. Click **Pages** on the left panel.
   5. For **Branch** (not Source), select `main`. Click `Save`. 
   6. For Costom domain, enter `www.yourwebsitedomain.me` (if your domain is *yourwebsitedomain.me*.) Click **Save**.
3.  Enjoy!
