let team = [
    {
      name: "Anrich Nortje",
      tag: "Cricket Coach",
      email : "anrich@exodus.com",
      img:
        "https://imagevars.gulfnews.com/2020/08/31/IPL-Nortje_17444f27656_medium.jpg"
    },
    {
      name: "Mitchell Warner",
      tag: "Tennis Instructor",
      email : "warner@exodus.com",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSA5285t4d_GXuEr_K2bpsQs62ixNX7Jao0Rg&usqp=CAU"
    },
    {
      name: "David Malan",
      tag: "Fitness Coach",
      email : "malan@exodus.com",
      img:
        "https://qph.fs.quoracdn.net/main-qimg-22c6bd25496dcde3000ec1f50a0ecd10"
    },
    {
      name: "Sarah Khan",
      tag: "Injury Consultant",
      email : "sarah@exodus.com",
      img:
        "https://urbanbalance.com/wp-content/uploads/2019/04/new-therapist.jpg"
    },
    {
      name: "Dwayne",
      tag: "Skating Master",
      email : "smith@exodus.com",
      
      img:
        "https://www.wonderslist.com/wp-content/uploads/2013/03/Gracie-Gold.jpg"
    },
    {
      name: "Samuel Simmons",
      tag: "Therapist",
      email : "lendl@exodus.com",
      
      img:
        "https://www.readersdigest.ca/wp-content/uploads/2018/10/13-things-your-therapist-wont-tell-you-12.jpg"
    },
    {
      name: "Tim Boult",
      tag: "Gym Instructor",
      email : "boult@exodus.com",
     
      img:
        "https://1-life.ca/wp-content/uploads/2016/11/One-Life-Kelowna-gym-personal-trainer-benefits.jpg"
    },
    {
      name: "Kane Southee",
      tag: "Yoga Guru",
      email : "kane@exodus.com",
      
      img:
        "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/the_health_benefits_of_yoga_ref_guide/650x350_the_health_benefits_of_yoga_ref_guide.jpg"
    }
  ];


function displayTeam() {
    let productContainer = document.querySelector(".row");
    team.map((member, index) => {
      productContainer.innerHTML += `<div class="column">

      <div class="card">
          <img src="${member.img}" alt="${member.name}" style="width:100%; height:300px;">
          <div class="container">
              <h2><b>${member.name}</b></h2>
              <p>${member.tag}</p>
              <p>${member.email}</p>
              

          </div>
      </div>

  </div>`;
    });
  }
  


displayTeam();