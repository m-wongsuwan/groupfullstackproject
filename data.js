let bigList = "aad aah aak aal aam aba abb abo abs aby ace ach ack act add ado ads adz aft age ago aha aid aim air ale all and ant any ape app apt arc are arf ark arm aro ars art ash ask ass ate awe awk aww axe aye ayu baa bac bad bae bag bah bam ban bar bat bay baz bed bee beg ben bet bib bid big bin bit bix boa bog boi boo bop bot bow box boy bra bro brr bud bug bum bun bus but buy bye bzz cab cam can cap car cat caw cel chi cob cod cog com con coo cot cum dam der die dig dim din dog dry ego emo erg ess exe exy fab fad fag fam fan far fat few fin fit gal gas gel get ghi gin goy gum gun gut guy ham hat her hit hod hog hot how hut ich ick imu ire jam kin las lay lie lin low lox mad mag map mas max mid mix mun nil nim nop now nun oak odd off oho pad pay peg pel pen pet pin pix pox pyx qin ram red Red rim rod rye sac sad sen sig sin sit sly sny son sub sun ted tee tel the til tin vai vug wax who win wok yex you zax"

const splitList = bigList.split(" ")
// console.log(splitList)
let string = ""
splitList.map(item => string += `"${item}", `)
console.log(string)