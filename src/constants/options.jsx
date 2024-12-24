export const SelectTraveleslist = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A sole traveler in exploration',
        icon: '🤘',
        people: '1'
    },
    
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two Travelers in tandem',
        icon: '🥂',
        people: '2'
    },
    
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving household',
        icon: '👨‍👩‍👧‍👦',
        people: '3 to 5 People'
    },

    {
        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekers',
        icon: '👫👫',
        people: '5 to 10 People'
    },
    
]


export const SelectBudgetOptions=[
    {
        id:'1',
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵'
    },

    {
        id:'2',
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💰'
    },

    {
        id:'3',
        title:'Luxury',
        desc:'Don\'t worry about the cost',
        icon:'💸'
    },
]

export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} people with a {budget} budget, give me Hotel options list with hotel names, hotel address, price, hotel image url, geo cordinates, rating, descriptions, and suggest itinerary with placename, place details, place image url, geo coordinates, ticket pricing, time to travel to each of the locations for {totalDays} days with each day plan with best time to visit in JSON format.Dont add unnecessary text simply generate in JSON format '