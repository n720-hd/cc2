import { MdEmail } from "react-icons/md";
import { IoPhonePortraitSharp } from "react-icons/io5";
import Image from "next/image";

const onFetch = async () => {
  try {
    let res = await fetch("https://randomuser.me/api/?results=6", {
      cache: "force-cache",
    });
    res = await res.json();
    const response = res.results;
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default async function Teams() {
  const isDatateam = await onFetch();
  const softwareDeveloperPositions = [
    {
      title: "Junior Front-End Developer",
      description:
        "Responsible for implementing visual elements and user interactions using HTML, CSS, JavaScript, and modern frameworks like React or Vue.",
    },
    {
      title: "Full-Stack Developer",
      description:
        "Works on both front-end and back-end development, managing servers, databases, and the user-facing side of web applications.",
    },
    {
      title: "Mobile Application Developer",
      description:
        "Specializes in building applications for iOS and Android platforms using technologies like React Native, Swift, or Kotlin.",
    },
    {
      title: "DevOps Engineer",
      description:
        "Focuses on streamlining development operations, managing cloud infrastructure, and automating CI/CD pipelines.",
    },
    {
      title: "Back-End Developer",
      description:
        "Develops server-side logic, APIs, and database structures using languages like Node.js, Python, or Java.",
    },
    {
      title: "Software Architect",
      description:
        "Designs and oversees the architecture of complex software systems, ensuring scalability, performance, and maintainability.",
    },
  ];

    const managementTeams = [
      {
        id: 1,
        name: "John Doe",
        position: "CEO",
        department: "Executive Board",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        email: "john.doe@commerzbank.de",
        phoneNumber: "+49 69 789 1234",
        description: "John Doe is the CEO of Commerzbank. He has been leading the bank since 2018 and has a proven track record of success in the financial industry."
      },
      {
        id: 2,
        name: "Jane Smith",
        position: "CFO",
        department: "Executive Board",
        image: "https://randomuser.me/api/portraits/women/11.jpg",
        email: "jane.smith@commerzbank.de",
        phoneNumber: "+49 69 789 5678",
        description: "Jane Smith is the CFO of Commerzbank. She has been with the bank since 2015 and has extensive experience in finance and accounting."
      },
      {
        id: 3,
        name: "Michael Brown",
        position: "Head of Retail Banking",
        department: "Retail Banking",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        email: "michael.brown@commerzbank.de",
        phoneNumber: "+49 69 789 9012",
        description: "Michael Brown is the Head of Retail Banking at Commerzbank. He has been with the bank since 2010 and has a deep understanding of the retail banking market."
      },
      {
        id: 4,
        name: "Emily Chen",
        position: "Head of Corporate Banking",
        department: "Corporate Banking",
        image: "https://randomuser.me/api/portraits/women/25.jpg",
        email: "emily.chen@commerzbank.de",
        phoneNumber: "+49 69 789 3456",
        description: "Emily Chen is the Head of Corporate Banking at Commerzbank. She has been with the bank since 2012 and has a strong background in corporate finance."
      },
      {
        id: 5,
        name: "David Lee",
        position: "Head of Investment Banking",
        department: "Investment Banking",
        image: "https://randomuser.me/api/portraits/men/19.jpg",
        email: "david.lee@commerzbank.de",
        phoneNumber: "+49 69 789 7689",
        description: "David Lee is the Head of Investment Banking at Commerzbank. He has been with the bank since 2015 and has a proven track record of success in investment banking."
      },
      {
        id: 6,
        name: "Sarah Taylor",
        position: "Head of Risk Management",
        department: "Risk Management",
        image: "https://randomuser.me/api/portraits/women/38.jpg",
        email: "sarah.taylor@commerzbank.de",
        phoneNumber: "+49 69 789 4567",
        description: "Sarah Taylor is the Head of Risk Management at Commerzbank. She has been with the bank since 2018 and has a strong background in risk management and compliance."
      }
    ];

  return (
    <main>
      <h1 className="font-bold text-2xl text-black pt-20 bg-white text-center">
        The Management Teams
      </h1>
      <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-44 grid grid-cols-1 sm:grid-cols-2 gap-7 py-10 pt-10 bg-white">
        {managementTeams.map((item, index) => {
          return (
            <div
              className="card card-side bg-base-100 shadow-xl flex flex-col sm:flex-row"
              key={index}
            >
              <figure className="w-full sm:w-1/3">
                <Image
                  src={item.image}
                  alt="Management"
                  className="rounded-xl w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </figure>
              <div className="card-body p-4 sm:p-6">
                <h2 className="card-title text-lg sm:text-xl">
                  {item.name}
                </h2>
                <p>{item.position}</p>
                <div className="flex items-center gap-2">
                  <MdEmail />
                  {item.email}
                </div>
                <div className="flex items-center gap-2">
                  <IoPhonePortraitSharp />
                  {item.phoneNumber}
                </div>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="font-bold text-2xl text-black pt-20 bg-white text-center">
        Our Technical Teams
      </h1>
      <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-44 grid grid-cols-1 sm:grid-cols-2 gap-7 py-10 pt-10 bg-white">
        {isDatateam.map((item, index) => {
          return (
            <div
              className="card card-side bg-base-100 shadow-xl flex flex-col sm:flex-row"
              key={index}
            >
              <figure className="w-full sm:w-1/3">
                <Image
                  src={item.picture.large}
                  alt="Team member"
                  className="rounded-xl w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </figure>
              <div className="card-body p-4 sm:p-6">
                <h2 className="card-title text-lg sm:text-xl">
                  {item.name.first} {item.name.last}
                </h2>
                <p>{softwareDeveloperPositions[index].title}</p>
                <div className="flex items-center gap-2">
                  <MdEmail />
                  {item.email}
                </div>
                <div className="flex items-center gap-2">
                  <IoPhonePortraitSharp />
                  {item.phone}
                </div>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
    
  );
}







// import { MdEmail } from "react-icons/md";
// import { IoPhonePortraitSharp } from "react-icons/io5";
// import Image from "next/image"

// const onFetch = async () => {
//     try{
//     let res = await fetch('https://randomuser.me/api/?results=6',{
//         cache: 'force-cache'
//     })
//     res = await res.json()
//     console.log(res)  
//     const response = res.results
//     return response
//     }catch(error){
//         console.log(error)
//     }
// }


// export default async function Teams(){
    
//     const isDatateam = await onFetch()
//     console.log(isDatateam)
//     const softwareDeveloperPositions = [
//         {
//           title: "Junior Front-End Developer",
//           description: "Responsible for implementing visual elements and user interactions using HTML, CSS, JavaScript, and modern frameworks like React or Vue."
//         },
//         {
//           title: "Full-Stack Developer",
//           description: "Works on both front-end and back-end development, managing servers, databases, and the user-facing side of web applications."
//         },
//         {
//           title: "Mobile Application Developer",
//           description: "Specializes in building applications for iOS and Android platforms using technologies like React Native, Swift, or Kotlin."
//         },
//         {
//           title: "DevOps Engineer",
//           description: "Focuses on streamlining development operations, managing cloud infrastructure, and automating CI/CD pipelines."
//         },
//         {
//           title: "Back-End Developer",
//           description: "Develops server-side logic, APIs, and database structures using languages like Node.js, Python, or Java."
//         },
//         {
//           title: "Software Architect",
//           description: "Designs and oversees the architecture of complex software systems, ensuring scalability, performance, and maintainability."
//         }
//       ];
//     return(
//         <main>
//         <h1 className="font-bold text-2xl text-black pt-32 bg-white text-center">Our Teams</h1>
//         <div className="px-44 grid grid-cols-2 bg-white gap-7 py-10 pt-20">
//             {isDatateam.map((item,index) => {
//                 return(
//                     <div className="card card-side bg-base-100 shadow-xl" key={index}>
//             <figure>
//             <Image
//                 src={item.picture.large}
//                 alt="Movie" 
//                 className="rounded-xl w-full h-full p-3 "
//                 width={500}
//                 height={500}
//                 />
//             </figure>
//             <div className="card-body">
//             <h2 className="card-title">{item.name.first} {item.name.last}</h2>
//             <p>{softwareDeveloperPositions[index].title}.</p>
//             <div className="flex items-center gap-2"><MdEmail />{item.email}</div>
//             <div className="flex items-center gap-2"> <IoPhonePortraitSharp />{item.phone}</div>
//             <div className="card-actions justify-end">
                
//             </div>
//             </div>
//             </div>
//                 )
//             })}
//         </div>
//         </main>
//     )
// }