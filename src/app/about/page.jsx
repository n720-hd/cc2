import Image from "next/image";

export default function page(){
    const commerzbankHistory = [
        {
          year: 1870,
          event: "Commerzbank founded in Hamburg by merchants and bankers, focusing on international trade finance."
        },
        {
          year: 1897,
          event: "First international branch opened in London, marking global expansion."
        },
        {
          year: 1920,
          event: "Becomes one of the largest banks in Germany by merging with other institutions."
        },
        {
          year: 1940,
          event: "During World War II, Commerzbank&apos;s assets were seized and operations disrupted."
        },
        {
          year: 1958,
          event: "After the war, the bank is reestablished as three regional institutions, which merged back together."
        },
        {
          year: 1970,
          event: "Global expansion continues with operations in major world financial centers."
        },
        {
          year: 1990,
          event: "Reintegration of branches in East Germany following the reunification."
        },
        {
          year: 2009,
          event: "Acquisition of Dresdner Bank, reinforcing its position as a major banking group."
        },
        {
          year: 2012,
          event: "Commerzbank focuses on sustainability and corporate responsibility initiatives."
        },
        {
          year: 2020,
          event: "Commerzbank celebrates 150 years of history, with a focus on digitalization and transformation."
        }
      ];
    return(
        <main className="bg-white text-black">
        
        <div className="container mx-auto pt-32">
            <h1 className="text-4xl font-bold text-center mb-8">Commerzbank History</h1>
            <p className="content-center items-center justify-center text-xl text-center">The more than 150-year history of Commerzbank is like a magnifying glass that shows many aspects of Germany&apos;s economic and political development. How did the bank develop? What does its logo mean? What were the names of the board spokespersons? Answers to these and many other questions that go beyond the bank can be found in the extensive, scientifically prepared documents in our historical archive. The archive is available to journalists and historians on request.</p>
        </div>
        <div className="w-full h-fit mt-10 bg-cyan-300">
            <Image
                src={"https://www.commerzbank.de/konzern/wer-wir-sind/geschichte/bilder/geschichte_berlin_hauptverwaltung_1937_res_1204x903.png"}
                width={300}
                height={300}
                className="w-full h-[70vh] object-cover"
            />
        </div>
        <div className="w-full h-fit px-20 mt-10">
                {commerzbankHistory.map((item,index) =>{
                    return(
                        <>
                        <div className="w-full h-fit flex-row gap-10 font-bold flex items-center px-20 border-y" key={index}>
                            <div className="w-fit py-10">
                            <h1>{item.year}</h1>
                            </div>
                            <div className="w-full flex text-justify">
                                <h1>{item.event}</h1>
                            </div>
                        </div>
                        </>
                    )
                })}
            
        </div>
        
        </main>
    )
}