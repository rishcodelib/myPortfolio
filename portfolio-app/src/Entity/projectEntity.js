class ProjectEntity {
  static data = {
    projects: [{
      "key": 1,
      "projectName": "Justified Code",
      "projectDetailLink": null,
      "status": "Completed",
      "alias": null,
      "description": "A landing page for company, bussinesses . . . ",
      "liveUrl": "https://justified-code-f9ec1.firebaseapp.com/",
      "gitUrl": null,
      "demoUrl": null,
      "imgSrc": "/images/no_image.png",
      "tag": ["HTML", "CSS", "Bootstrap", "Javascript"]
    },

    /* 2 createdAt:5/15/2024, 11:35:01 AM*/
    {
      "key": 2,
      "projectName": "The Rashan Store",
      "projectDetailLink": null,
      "status": "Completed",
      "alias": null,
      "description": "A Multi Utility Online Grocercy Store.",
      "liveUrl": "https://www.rishabh-aggarwal.com/wp_projects/rash›",
      "gitUrl": null,
      "demoUrl": null,
      "imgSrc": "images/RashanStore.png",
      "tag": ["Wordpress", "Elementor by WP", "Bootstrap"]
    },

    /* 3 createdAt:5/15/2024, 11:35:01 AM*/
    {
      "key": 3,
      "projectName": "My Market",
      "projectDetailLink": null,
      "status": "Completed",
      "alias": null,
      "description": "A Complete Web Shopping Application.",
      "liveUrl": "https://www.rishabh-aggarwal.com/wp_projects/mymarket/",
      "gitUrl": null,
      "imgSrc": "images/MyMarket.png",
      "demoUrl": null,
      "tag": ["Wordpress", "Elementor by WP", "Bootstrap"]
    },

    /* 4 createdAt:5/15/2024, 11:35:01 AM*/
    {
      "key": 4,
      "projectName": "The Travel Routes",
      "projectDetailLink": null,
      "status": "Completed",
      "alias": null,
      "description": "A Complete Travel web Application created on wordpress.",
      "liveUrl": "https://www.travelRoutes.in/",
      "gitUrl": null,
      "demoUrl": null,
      "imgSrc": "images/no_image.png",
      "tag": ["Wordpress", "Elementor by WP"]
    },

    /* 5 createdAt:5/15/2024, 11:35:01 AM*/
    {
      "key": 5,
      "projectName": "Shree-Trends",
      "projectDetailLink": null,
      "status": "Completed",
      "alias": "WareHouse Management System",
      "description": "Ecommerce Application with ability to post/recieve order and handle other Order Request, with integration of Bulk SMS and SMTP Server.",
      "liveUrl": "https://www.shreetrends.in/",
      "gitUrl": null,
      "demoUrl": null,
      "imgSrc": "images/no_image.png",
      "tag": [
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
      "key": 6,
      "projectName": "Streameo",
      "projectDetailLink": null,
      "status": "Completed",
      "description": "A Subscription based Video streaming website, with features of streaming a video into 3 different qualities, subscription plans and stream control",
      "liveUrl": null,
      "gitUrl": "https://github.com/cdacgroup16/streameo",
      "demoUrl": null,
      "imgSrc": "images/no_image.png",
      "tag": ["MongoDB", "ExpressJS", "Angular", "NodeJS"]
    },

    /* 7 createdAt:5/15/2024, 11:35:01 AM*/
    {
      "key": 7,
      "projectName": "Personal Portfolio",
      "description": "Personal portfolio website created to showcase projects and details about myself. ",
      "liveUrl": "https://rishabh-aggarwal.com",
      "gitUrl": "https://github.com/rishcodelib",
      "demoUrl": "https://rishabhaggarwal-bae83.web.app/home",
      "imgSrc": "images/Portfolio.png",
      "tag": ["NodeJS", "ExpressJS", "Angular"]
    },

    /* 8 createdAt:5/15/2024, 11:35:01 AM*/
    {
      "key": 8,
      "projectName": "Ecommerce-App",
      "projectDetailLink": null,
      "status": "Completed",
      "description": "A Complete E-Commerce solution for customers, vendors & distrubuters.",
      "liveUrl": "https://ecommerceapp-14994.web.app/",
      "gitUrl": "https://github.com/rishcodelib/Ecommerce-App-JAVA",
      "imgSrc": "../Assets/images/no_image.png",
      "tag": ["JAVA", "Spring Boot", "Angular"]
    }
    ]
  };

  static getProjects() {
    return this.data.projects;
  }
}

export default ProjectEntity;