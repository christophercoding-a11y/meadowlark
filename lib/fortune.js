const fortunes = [
    'Conquer your fears or they will conquer you.',
    'River need springs.',
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple."
]

exports.getFortune =()=> {
    const idx = Math.floor(Math.random() * fortunes.length)
    return fortunes[idx]
}