export const getImageUrl = (imagePath: string) => {
  return `/assets${imagePath}`;
};

// More ideas and inspiration...
export const inspirationImages = [
  {
    id: 0,
    name: "Bedroom",
    images: [
      { id: 1, img1: "/inspiration/bedroom/bedroomIns1.png" },
      { id: 2, img1: "/inspiration/bedroom/bedroomIns2.png" },
      { id: 3, img1: "/inspiration/bedroom/bedroomIns3.png" },
      { id: 4, img1: "/inspiration/bedroom/bedroomIns4.png" },
      { id: 5, img1: "/inspiration/bedroom/bedroomIns5.png" },
      { id: 6, img1: "/inspiration/bedroom/bedroomIns6.png" },
    ],
  },
  {
    id: 1,
    name: "Living Room",
    images: [
      { id: 1, img1: "/inspiration/livingRoom/livingRoomIns1.png" },
      { id: 2, img1: "/inspiration/livingRoom/livingRoomIns2.png" },
      { id: 3, img1: "/inspiration/livingRoom/livingRoomIns3.png" },
      { id: 4, img1: "/inspiration/livingRoom/livingRoomIns4.png" },
      { id: 5, img1: "/inspiration/livingRoom/livingRoomIns5.png" },
      { id: 6, img1: "/inspiration/livingRoom/livingRoomIns6.png" },
    ],
  },
  {
    id: 2,
    name: "Kitchen",
    images: [
      { id: 1, img1: "/inspiration/kitchen/kitchenIns1.png" },
      { id: 2, img1: "/inspiration/kitchen/kitchenIns2.png" },
      { id: 3, img1: "/inspiration/kitchen/kitchenIns3.png" },
      { id: 4, img1: "/inspiration/kitchen/kitchenIns4.png" },
      { id: 5, img1: "/inspiration/kitchen/kitchenIns5.png" },
      { id: 6, img1: "/inspiration/kitchen/kitchenIns6.png" },
    ],
  },
  {
    id: 3,
    name: "Workspace",
    images: [
      { id: 1, img1: "/inspiration/workspace/workspaceIns1.png" },
      { id: 2, img1: "/inspiration/workspace/workspaceIns2.png" },
      { id: 3, img1: "/inspiration/workspace/workspaceIns3.png" },
      { id: 4, img1: "/inspiration/workspace/workspaceIns4.png" },
      { id: 5, img1: "/inspiration/workspace/workspaceIns5.png" },
      { id: 6, img1: "/inspiration/workspace/workspaceIns6.png" },
    ],
  },
  {
    id: 4,
    name: "Outdoor",
    images: [
      { id: 1, img1: "/inspiration/outdoor/outdoorIns1.png" },
      { id: 2, img1: "/inspiration/outdoor/outdoorIns2.png" },
      { id: 3, img1: "/inspiration/outdoor/outdoorIns3.png" },
      { id: 4, img1: "/inspiration/outdoor/outdoorIns4.png" },
      { id: 5, img1: "/inspiration/outdoor/outdoorIns5.png" },
      { id: 6, img1: "/inspiration/outdoor/outdoorIns6.png" },
    ],
  },
  {
    id: 5,
    name: "Bathroom",
    images: [
      { id: 1, img1: "/inspiration/bathroom/bathroomIns1.png" },
      { id: 2, img1: "/inspiration/bathroom/bathroomIns2.png" },
      { id: 3, img1: "/inspiration/bathroom/bathroomIns3.png" },
      { id: 4, img1: "/inspiration/bathroom/bathroomIns4.png" },
      { id: 5, img1: "/inspiration/bathroom/bathroomIns5.png" },
      { id: 6, img1: "/inspiration/bathroom/bathroomIns6.png" },
    ],
  },
];

export const footerInfo = [
  {
    id: 1,
    section: "IKEA Family",
    items: [
      { id: "fam-1a2b3c", footerLink: "IKEA Family" },
      { id: "fam-4d5e6f", footerLink: "Log in" },
      { id: "fam-7g8h9i", footerLink: "Join IKEA Family" },
      { id: "fam-j0k1l2", footerLink: "Member offers" },
      { id: "fam-3m4n5o", footerLink: "Workshops & Events" },
    ],
  },
  {
    id: 2,
    section: "Services",
    items: [
      { id: "srv-1a2b3c", footerLink: "Delivery Service" },
      { id: "srv-4d5e6f", footerLink: "Click & collect" },
      { id: "srv-7g8h9i", footerLink: "Personal shopper" },
      { id: "srv-j0k1l2", footerLink: "Design your room" },
      { id: "srv-3m4n5o", footerLink: "Assembly Service" },
      { id: "srv-6p7q8r", footerLink: "Measuring Service" },
      { id: "srv-9s0t1u", footerLink: "Kitchen Planning" },
      { id: "srv-2v3w4x", footerLink: "Installation Service" },
      { id: "srv-5y6z7a", footerLink: "Track & manage your order" },
      { id: "srv-8b9c0d", footerLink: "Customer Service" },
      { id: "srv-1e2f3g", footerLink: "Recycle Program" },
    ],
  },
  {
    id: 3,
    section: "Help",
    items: [
      { id: "hlp-1a2b3c", footerLink: "How to shop" },
      { id: "hlp-4d5e6f", footerLink: "Return policy" },
      { id: "hlp-7g8h9i", footerLink: "Prices and price tags" },
      { id: "hlp-j0k1l2", footerLink: "Contact us" },
      { id: "hlp-3m4n5o", footerLink: "FAQ's" },
      { id: "hlp-6p7q8r", footerLink: "Planners" },
      { id: "hlp-9s0t1u", footerLink: "Gift Card" },
      { id: "hlp-2v3w4x", footerLink: "Feedback" },
      { id: "hlp-5y6z7a", footerLink: "Terms and conditions" },
    ],
  },
  {
    id: 4,
    section: "About IKEA",
    items: [
      { id: "abt-1a2b3c", footerLink: "This is IKEA" },
      { id: "abt-4d5e6f", footerLink: "Careers at IKEA" },
      { id: "abt-7g8h9i", footerLink: "Newsroom" },
      { id: "abt-j0k1l2", footerLink: "Sustainability" },
      { id: "abt-3m4n5o", footerLink: "IKEA Stores" },
      { id: "abt-6p7q8r", footerLink: "IKEA Restaurant" },
      { id: "abt-9s0t1u", footerLink: "IKEA for Business" },
    ],
  },
];
