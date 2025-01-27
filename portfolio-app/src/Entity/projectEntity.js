class ProjectEntity {
  static data = {
    projects: [{
      key: 1,
      projectName: "Justified Code",
      projectDetailLink: null,
      status: "Completed",
      alias: null,
      shortDesc: "Justified Code is a sleek and modern landing page designed for a tech company specializing in software development and IT consulting services. The landing page aims to provide a comprehensive overview of the company's . . .",
      description: "Justified Code is a sleek and modern landing page designed for a tech company specializing in software development and IT consulting services. The landing page aims to provide a comprehensive overview of the company's offerings, showcase their expertise, and drive user engagement through a clean and intuitive design.",
      liveUrl: "https://justified-code-f9ec1.firebaseapp.com/",
      gitUrl: null,
      demoUrl: null,
      imgSrc: "/images/projectImages/justifiedCode.png",
      tag: ["HTML", "CSS", "Bootstrap", "Javascript"]
    },

    /* 2 createdAt:5/15/2024, 11:35:01 AM*/
    {
      key: 2,
      projectName: "The Rashan Store",
      projectDetailLink: null,
      status: "Completed",
      alias: null,
      description: "The Rashan Store is a comprehensive online grocery store designed to provide a seamless shopping experience for customers. This project was developed for a company specializing in delivering fresh groceries and household essentials directly to customers' doorsteps. The platform aims to simplify the grocery shopping process with an intuitive interface, a wide range of products, and convenient delivery options.",
      liveUrl: "https://www.rishabh-aggarwal.com/wp_projects/rash›",
      gitUrl: null,
      demoUrl: null,
      imgSrc: "/images/projectImages/RashanStore.png",
      tag: ["Wordpress", "Elementor by WP", "Bootstrap"]
    },

    /* 3 createdAt:5/15/2024, 11:35:01 AM*/
    {
      key: 3,
      projectName: "My Market",
      projectDetailLink: null,
      status: "Completed",
      alias: null,
      description: "My Market is an all-in-one online marketplace designed to offer a wide range of clothing and makeup products. This project was developed for a company specializing in fashion and beauty, aiming to provide customers with a seamless shopping experience. The platform features an extensive collection of trendy clothes and high-quality makeup products, catering to diverse customer preferences and styles.",
      liveUrl: "https://www.rishabh-aggarwal.com/wp_projects/mymarket/",
      gitUrl: null,
      imgSrc: "/images/projectImages/MyMarket.png",
      demoUrl: null,
      tag: ["Wordpress", "Elementor by WP", "Bootstrap"]
    },

    /* 4 createdAt:5/15/2024, 11:35:01 AM*/
    {
      key: 4,
      projectName: "The Travel Routes",
      projectDetailLink: null,
      status: "Completed",
      alias: null,
      description: "A Complete Travel web Application created on wordpress.",
      liveUrl: "https://www.travelRoutes.in/",
      gitUrl: null,
      demoUrl: null,
      imgSrc: "/images/projectImages/no_image.png",
      tag: ["Wordpress", "Elementor by WP"]
    },

    /* 5 createdAt:5/15/2024, 11:35:01 AM*/
    {
      key: 5,
      projectName: "Shree-Trends WMS",
      projectDetailLink: null,
      status: "Completed",
      alias: "WareHouse Management System",
      description: "Ecommerce Application with ability to post/recieve order and handle other Order Request, with integration of Bulk SMS and SMTP Server.",
      liveUrl: "https://www.shreetrends.in/",
      gitUrl: null,
      demoUrl: null,
      imgSrc: "/images/projectImages/shreeTrends.png",
      tag: [
        "HTML",
        "CSS3",
        "PHP",
        "MySQL",
        "Jquery",
        "Javascript"
      ]
    },

    /* 6 createdAt:5/15/2024, 11:35:01 AM*/
    {
      key: 6,
      projectName: "Streameo",
      projectDetailLink: null,
      status: "Completed",
      description: "A Subscription based Video streaming website, with features of streaming a video into 3 different qualities, subscription plans and stream control",
      liveUrl: 'null',
      gitUrl: "https://github.com/cdacgroup16/streameo",
      demoUrl: 'null',
      imgSrc: "/images/projectImages/no_image.png",
      tag: ["MongoDB", "ExpressJS", "React", "NodeJS"]
    },

    /* 7 createdAt:5/15/2024, 11:35:01 AM*/
    {
      key: 7,
      projectName: "Personal Portfolio",
      description: "Personal portfolio website created to showcase projects and details about myself. ",
      liveUrl: "https://rishabhaggarwal.in",
      gitUrl: "https://github.com/rishcodelib",
      demoUrl: "https://rishabhaggarwal-bae83.web.app/home",
      imgSrc: "/images/projectImages/Portfolio.jpg",
      tag: ["NodeJS", "ExpressJS", "Angular"]
    },

    /* 8 createdAt:5/15/2024, 11:35:01 AM*/
    {
      key: 8,
      projectName: "Ecommerce-App",
      projectDetailLink: null,
      status: "Completed",
      description: "A Complete E-Commerce solution for customers, vendors & distrubuters.",
      liveUrl: "https://ecommerceapp-14994.web.app/",
      gitUrl: "https://github.com/rishcodelib/Ecommerce-App-JAVA",
      imgSrc: "/images/projectImages/eCommerceApp.png",
      tag: ["JAVA", "Spring Boot", "Angular"]
    }
    ]
  };

  static getProjects() {
    return this.data.projects;
  }
  static getProject(key) {
    return this.data.projects.find(project => project.key === key);
  }
}

export default ProjectEntity;