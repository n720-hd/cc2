import Image from "next/image"

const onFetch = async () => {
    try{
    let res = await fetch('https://randomuser.me/api/?results=6',{
        cache: 'force-cache'
    })
    res = await res.json()
    console.log(res)  
    const response = res.results
    return response
    }catch(error){
        console.log(error)
    }
}


export default async function Teams(){
    
    const isDatateam = await onFetch()
    console.log(isDatateam)
    const softwareDeveloperPositions = [
        {
          title: "Junior Front-End Developer",
          description: "Responsible for implementing visual elements and user interactions using HTML, CSS, JavaScript, and modern frameworks like React or Vue."
        },
        {
          title: "Full-Stack Developer",
          description: "Works on both front-end and back-end development, managing servers, databases, and the user-facing side of web applications."
        },
        {
          title: "Mobile Application Developer",
          description: "Specializes in building applications for iOS and Android platforms using technologies like React Native, Swift, or Kotlin."
        },
        {
          title: "DevOps Engineer",
          description: "Focuses on streamlining development operations, managing cloud infrastructure, and automating CI/CD pipelines."
        },
        {
          title: "Back-End Developer",
          description: "Develops server-side logic, APIs, and database structures using languages like Node.js, Python, or Java."
        },
        {
          title: "Software Architect",
          description: "Designs and oversees the architecture of complex software systems, ensuring scalability, performance, and maintainability."
        }
      ];
    return(
        <main>
        <h1 className="font-bold text-2xl text-black pt-32 bg-white text-center">Our Teams</h1>
        <div className="px-44 grid grid-cols-2 bg-white gap-7 py-10 pt-20">
            {isDatateam.map((item,index) => {
                return(
                    <div className="card card-side bg-base-100 shadow-xl" key={index}>
            <figure>
            <Image
                src={item.picture.large}
                alt="Movie" 
                className="rounded-xl"
                width={500}
                height={500}
                />
            </figure>
            <div className="card-body">
            <h2 className="card-title">{item.name.first} {item.name.last}</h2>
            <p>{softwareDeveloperPositions[index].title}.</p>
            <div className="card-actions justify-end">
                
            </div>
            </div>
            </div>
                )
            })}
        </div>
        </main>
    )
}