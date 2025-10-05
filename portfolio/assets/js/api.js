async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/SisterKrone/DIO-Javascript-challenges/refs/heads/main/portfolio/data/profile.json'
    const fetching = await fetch(url)       
    return await fetching.json()    
}