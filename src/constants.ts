export interface ZyvoProduct {
  id: number;
  name: string;
  description: string;
  benefits: string[];
  usageFlow: string;
  priceRange: string;
  iconName: string;
}

export const ZYVO_PRODUCTS: ZyvoProduct[] = [
  {
    id: 1,
    name: "Business Website",
    description: "Shows the business, products, contact details, and location online.",
    benefits: [
      "Customers can find your shop on Google",
      "Shows your products and services online",
      "Builds trust and professional brand image",
      "Customers can contact you anytime",
      "Works 24/7 even when your shop is closed"
    ],
    usageFlow: "Customer searches your shop on Google → They open your website → They see your products → They contact you or visit your shop.",
    priceRange: "₹5000 – ₹7000",
    iconName: "Globe"
  },
  {
    id: 2,
    name: "WhatsApp Ordering System",
    description: "Customers browse products and place orders directly through WhatsApp.",
    benefits: [
      "Customers can order directly from their phone",
      "Orders arrive instantly on your WhatsApp",
      "Reduces phone call confusion",
      "Faster ordering for customers",
      "Perfect for food shops and retail stores"
    ],
    usageFlow: "Customer clicks your WhatsApp link → They see your menu/catalog → They send an order message → You confirm and deliver.",
    priceRange: "₹6000 – ₹8000",
    iconName: "MessageSquare"
  },
  {
    id: 3,
    name: "Digital Product Catalog",
    description: "A modern online catalog for shops to display their products.",
    benefits: [
      "Show all your products online",
      "Customers can browse before visiting the shop",
      "Saves time explaining products",
      "Makes your shop look professional"
    ],
    usageFlow: "Customer scans QR or clicks link → They browse your digital catalog → They choose what they like → They visit your shop to buy.",
    priceRange: "₹4000 – ₹6000",
    iconName: "BookOpen"
  },
  {
    id: 4,
    name: "Online Food Ordering Website",
    description: "Restaurants and food shops can accept online orders.",
    benefits: [
      "Accept online food orders easily",
      "Reduce waiting time in shop",
      "Manage all orders in one place",
      "Increase takeaway orders"
    ],
    usageFlow: "Hungry customer opens your food site → They select dishes and add to cart → They pay or choose COD → You prepare and deliver the food.",
    priceRange: "₹7000 – ₹9000",
    iconName: "Utensils"
  },
  {
    id: 5,
    name: "Shop Management Dashboard",
    description: "A system to manage orders, products, and customers.",
    benefits: [
      "Track all sales and orders in one place",
      "Manage product prices and stock easily",
      "Understand which products sell the most",
      "Keep customer records for marketing"
    ],
    usageFlow: "You log in to your dashboard → You see new orders and sales reports → You update stock levels → You manage your business efficiently.",
    priceRange: "₹9000 – ₹12000",
    iconName: "LayoutDashboard"
  },
  {
    id: 6,
    name: "Inventory Management System",
    description: "Tracks stock levels and product quantities.",
    benefits: [
      "Avoid running out of popular items",
      "Track stock across multiple locations",
      "Get alerts when stock is low",
      "Reduce product wastage"
    ],
    usageFlow: "Product arrives at warehouse → You scan or enter into system → System tracks every sale → You get 'Low Stock' alerts automatically.",
    priceRange: "₹8000 – ₹11000",
    iconName: "Package"
  },
  {
    id: 7,
    name: "Customer Database System",
    description: "Stores customer phone numbers and purchase history.",
    benefits: [
      "Build a list of loyal customers",
      "Send festival offers and discounts",
      "Track what each customer likes",
      "Improve customer service"
    ],
    usageFlow: "Customer makes a purchase → You save their contact details → System tracks their history → You send them personalized offers via SMS/WA.",
    priceRange: "₹5000 – ₹7000",
    iconName: "Users"
  },
  {
    id: 8,
    name: "Loyalty Rewards System",
    description: "Customers earn points for purchases.",
    benefits: [
      "Encourages customers to come back",
      "Reward your most loyal shoppers",
      "Increase total sales per customer",
      "Stand out from competitors"
    ],
    usageFlow: "Customer buys something → They earn points on their phone → They collect enough points → They get a discount or free gift.",
    priceRange: "₹6000 – ₹9000",
    iconName: "Gift"
  },
  {
    id: 9,
    name: "Appointment Booking System",
    description: "Customers can book appointments online.",
    benefits: [
      "Stop taking constant phone calls",
      "Organize your daily schedule",
      "Reduce 'no-shows' with reminders",
      "Let customers book 24/7"
    ],
    usageFlow: "Customer visits your booking page → They pick a service and time → They receive a confirmation → You see the booking in your calendar.",
    priceRange: "₹6000 – ₹9000",
    iconName: "Calendar"
  },
  {
    id: 10,
    name: "Online Payment Integration",
    description: "Accept payments online.",
    benefits: [
      "Accept UPI, Cards, and NetBanking",
      "Get money directly in your bank",
      "Safe and secure transactions",
      "Professional payment experience"
    ],
    usageFlow: "Customer chooses to pay online → They use UPI or Card → Payment is processed securely → You receive instant confirmation.",
    priceRange: "₹3000 – ₹5000",
    iconName: "CreditCard"
  },
  {
    id: 11,
    name: "AI Customer Support Chatbot",
    description: "Automated chatbot answering customer questions.",
    benefits: [
      "Answer customers 24/7 instantly",
      "Handle common questions automatically",
      "Save time for your staff",
      "Never miss a customer inquiry"
    ],
    usageFlow: "Customer asks a question on your site → AI Chatbot understands and replies → Customer gets instant help → You only step in for complex issues.",
    priceRange: "₹5000 – ₹8000",
    iconName: "Bot"
  },
  {
    id: 12,
    name: "Business Analytics Dashboard",
    description: "Shows business performance and sales reports.",
    benefits: [
      "See your daily and monthly profit",
      "Identify your best-selling products",
      "Track business growth over time",
      "Make data-driven decisions"
    ],
    usageFlow: "System collects sales data → It generates visual charts and graphs → You review the performance → You plan your next business move.",
    priceRange: "₹9000 – ₹15000",
    iconName: "BarChart3"
  },
  {
    id: 13,
    name: "QR Menu System",
    description: "Restaurants provide digital menus via QR code.",
    benefits: [
      "No need for physical paper menus",
      "Update prices and items instantly",
      "Hygienic and modern experience",
      "Reduce printing costs"
    ],
    usageFlow: "Customer sits at table → They scan the QR code → Your digital menu opens on their phone → They tell the waiter their order.",
    priceRange: "₹3000 – ₹5000",
    iconName: "QrCode"
  },
  {
    id: 14,
    name: "Delivery Tracking System",
    description: "Customers track delivery status.",
    benefits: [
      "Customers know where their order is",
      "Reduces 'Where is my order?' calls",
      "Builds trust and transparency",
      "Manage delivery staff easily"
    ],
    usageFlow: "Order is out for delivery → Customer gets a tracking link → They see the status in real-time → Order is delivered successfully.",
    priceRange: "₹6000 – ₹9000",
    iconName: "Truck"
  },
  {
    id: 15,
    name: "E-Commerce Store",
    description: "Full online store with product checkout.",
    benefits: [
      "Sell products across India",
      "Automated checkout and payments",
      "Manage thousands of products",
      "Grow beyond your local area"
    ],
    usageFlow: "Customer finds your online store → They add multiple items to cart → They pay and enter address → You ship the products to them.",
    priceRange: "₹12000 – ₹18000",
    iconName: "ShoppingBag"
  },
  {
    id: 16,
    name: "Local Marketplace Platform",
    description: "Multiple shops sell on one online marketplace.",
    benefits: [
      "List your products with other shops",
      "Reach a much larger audience",
      "Shared marketing costs",
      "Easy to manage your own shop section"
    ],
    usageFlow: "You join the local marketplace → You list your products → Customers browse the whole market → They buy from you and other local shops.",
    priceRange: "₹15000 – ₹25000",
    iconName: "Store"
  },
  {
    id: 17,
    name: "Event Registration System",
    description: "People can register for events online.",
    benefits: [
      "Collect attendee details easily",
      "Sell tickets or take free signups",
      "Send automated event reminders",
      "Manage guest lists on your phone"
    ],
    usageFlow: "You create an event page → People fill the registration form → They get a digital ticket/pass → You scan their pass at the event.",
    priceRange: "₹5000 – ₹8000",
    iconName: "Ticket"
  },
  {
    id: 18,
    name: "Digital Invoice System",
    description: "Generate professional invoices for customers.",
    benefits: [
      "Create professional GST/Non-GST bills",
      "Send invoices via WhatsApp or Email",
      "Track pending payments easily",
      "Keep your accounts organized"
    ],
    usageFlow: "You enter customer and item details → System generates a PDF invoice → You send it to the customer → You mark it as 'Paid' when received.",
    priceRange: "₹4000 – ₹6000",
    iconName: "FileText"
  },
  {
    id: 19,
    name: "Order Management System",
    description: "Track incoming orders and order status.",
    benefits: [
      "Never miss a customer order",
      "Update order status (Pending, Ready, Shipped)",
      "Notify customers automatically",
      "Faster processing time"
    ],
    usageFlow: "New order arrives in system → You accept and start preparing → You update status to 'Ready' → Customer gets an alert to collect.",
    priceRange: "₹7000 – ₹10000",
    iconName: "ClipboardList"
  },
  {
    id: 20,
    name: "Employee Management System",
    description: "Manage employee details and attendance.",
    benefits: [
      "Track staff attendance and shifts",
      "Manage salaries and bonuses",
      "Store employee documents safely",
      "Improve staff productivity"
    ],
    usageFlow: "Employee logs in for work → System tracks their hours → Monthly salary is calculated → You review performance reports.",
    priceRange: "₹8000 – ₹12000",
    iconName: "UserCog"
  },
  {
    id: 21,
    name: "Lead Generation Website",
    description: "Captures customer inquiries and contact details.",
    benefits: [
      "Get high-quality business inquiries",
      "Collect customer needs automatically",
      "Follow up with interested people",
      "Increase your conversion rate"
    ],
    usageFlow: "Customer sees your ad/link → They fill a 'Get a Quote' form → You receive their details instantly → You call them to close the deal.",
    priceRange: "₹5000 – ₹8000",
    iconName: "Target"
  },
  {
    id: 22,
    name: "Social Media Automation Tool",
    description: "Automates posting and marketing.",
    benefits: [
      "Post to FB/Insta automatically",
      "Schedule posts for the whole week",
      "Keep your brand active online",
      "Save hours of manual work"
    ],
    usageFlow: "You create 7 posts at once → You schedule them for the week → System posts them at the best times → Your audience stays engaged.",
    priceRange: "₹4000 – ₹7000",
    iconName: "Share2"
  },
  {
    id: 23,
    name: "AI Business Advisor",
    description: "AI suggests improvements for the business.",
    benefits: [
      "Get smart advice for your shop",
      "Identify areas to save money",
      "Discover new growth opportunities",
      "Stay ahead of local trends"
    ],
    usageFlow: "You enter your business data → AI analyzes your performance → It suggests 3 ways to grow → You implement and see results.",
    priceRange: "₹5000 – ₹10000",
    iconName: "Lightbulb"
  },
  {
    id: 24,
    name: "Subscription Billing System",
    description: "Manage recurring payments.",
    benefits: [
      "Collect monthly fees automatically",
      "Manage memberships and plans",
      "Predict your monthly income",
      "Reduce manual billing work"
    ],
    usageFlow: "Customer signs up for a plan → System bills them every month → You receive payments automatically → Expired plans are alerted.",
    priceRange: "₹10000 – ₹15000",
    iconName: "RefreshCw"
  },
  {
    id: 25,
    name: "Review and Rating System",
    description: "Collect customer reviews.",
    benefits: [
      "Build trust with 5-star reviews",
      "Show customer feedback on your site",
      "Improve based on suggestions",
      "Better ranking on Google"
    ],
    usageFlow: "Customer finishes a purchase → They get a 'Rate Us' link → They leave a positive review → New customers see it and trust you.",
    priceRange: "₹3000 – ₹5000",
    iconName: "Star"
  },
  {
    id: 26,
    name: "Online Training Platform",
    description: "Businesses can sell training programs.",
    benefits: [
      "Sell your expertise online",
      "Create video courses and lessons",
      "Automated access for students",
      "Earn money while you sleep"
    ],
    usageFlow: "You upload your training videos → Students pay for access → They learn at their own pace → You manage their progress.",
    priceRange: "₹12000 – ₹20000",
    iconName: "GraduationCap"
  },
  {
    id: 27,
    name: "Franchise Management System",
    description: "Manage multiple branches of a business.",
    benefits: [
      "Control all branches from one place",
      "Standardize quality and stock",
      "Compare performance between shops",
      "Scale your business easily"
    ],
    usageFlow: "Branch A makes a sale → You see it in your master app → You compare with Branch B → You manage the whole network.",
    priceRange: "₹20000 – ₹35000",
    iconName: "Network"
  },
  {
    id: 28,
    name: "Marketing Campaign Manager",
    description: "Run marketing promotions and offers.",
    benefits: [
      "Create festival offers in minutes",
      "Send bulk SMS/WhatsApp alerts",
      "Track which offers work best",
      "Bring customers back to shop"
    ],
    usageFlow: "You create a 'Diwali Offer' → You send it to your database → Customers visit with the coupon → Your sales increase.",
    priceRange: "₹5000 – ₹8000",
    iconName: "Megaphone"
  },
  {
    id: 29,
    name: "Smart Notification System",
    description: "Send alerts to customers.",
    benefits: [
      "Keep customers updated instantly",
      "Send order and delivery alerts",
      "Automated reminders for bookings",
      "Improve customer engagement"
    ],
    usageFlow: "System triggers an event → Customer gets a push/SMS alert → They take action immediately → Process stays smooth.",
    priceRange: "₹4000 – ₹6000",
    iconName: "Bell"
  },
  {
    id: 30,
    name: "AI Business Website Generator",
    description: "Automatically generates a website for businesses.",
    benefits: [
      "Get a website in just 5 minutes",
      "No technical knowledge needed",
      "AI writes the content for you",
      "Super fast and affordable"
    ],
    usageFlow: "You enter your business name → AI generates the design and text → You review and publish → Your website is live.",
    priceRange: "₹3000 – ₹5000",
    iconName: "Zap"
  }
];
