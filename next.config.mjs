/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https', 
                hostname: 'www.commerzbank.de', 
                pathname: '**'
            },
            {
                protocol: 'https', 
                hostname: 'images.unsplash.com', 
                pathname: '**'
            },
            {
                protocol: 'https', 
                hostname: 'randomuser.me', 
                pathname: '**'
            },
            {   
                protocol: 'https', 
                hostname: 'img.fotocommunity.com', 
                pathname: '**'
                
            }

            
        ]
}
}

export default nextConfig;
