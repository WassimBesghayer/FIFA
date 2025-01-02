import React from 'react'

function Players() {
    let Players=[
        {name:"Mouez", surname:"HASSAN", age:29, nationality:"Tunisian", role:"Goalkeeper", jerseyNum:23, img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fidaraty.s3.us-west-000.backblazeb2.com%2Fposts%2Fmondial-2018-tunisie-le-gardien-mouez-hassan-autorise-a-porter-le-maillot-de-la-selection-nationale.jpg&f=1&nofb=1&ipt=9c297c2bb2e26fdcf1a9ab1f8a19610911bd44fffebaf4ba83a11a2a60f7cbd1&ipo=images"}, 
        {name:"Ghaith", surname:"YAFERNI", age:26, nationality:"Tunisian", role:"Goalkeeper", jerseyNum:16, img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsport.tunisienumerique.com%2Fwp-content%2Fuploads%2F2020%2F10%2Fghaith-yefrni-ca.jpg&f=1&nofb=1&ipt=5296d1ebd814a1f8ffc9756314430e8b20447c4bb80d32a3521ca9c0b2fcd385&ipo=images"},
        {name:"Taoufik", surname:"CHERIFI", age:23, nationality:"Algerian", role:"Defender", jerseyNum:32, img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Flapresse.tn%2Fwp-content%2Fuploads%2F2022%2F05%2FCHERIFI.jpg%3Ffit%3D850%252C491%26ssl%3D1&f=1&nofb=1&ipt=e2db3d84da8ec70891c2ddff9ba7a0fcc761c12359914c5795ac04253a9722f1&ipo=images"},
        {name:"Ali", surname:"YOUSSEF", age:23, nationality:"Libyan", role:"Center", jerseyNum:2, img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Rst0sWU-di-SqopekKMfJAAAAA%26pid%3DApi&f=1&ipt=fa2c9554d4d564266e6b5b60dc35e9695e67b5520ff430fce681b08c8e4ab41f&ipo=images"},
        {name:"Phillippe", surname:"KINZUMBI", age:25, nationality:"D.R. Congolese", role:"Right Winger", jerseyNum:18, img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.flashscore.com%2Fres%2Fimage%2Fdata%2Fp22akDe5-n3jMttYB.png&f=1&nofb=1&ipt=9895a74c1d5356323e850fb4f07e4c87f509d5efab2d0c255797da608de6d511&ipo=images"},
        {name:"Jules", surname:"Armand Kooh", age:25, nationality:"Cameroonian", role:"Attacker", jerseyNum:25, img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fafricafootunited.com%2Fwp-content%2Fuploads%2F2024%2F09%2Finbound5201137732297530112.jpg&f=1&nofb=1&ipt=3eb860c0aed414c76bf8b8745185d9a878e4dc6996c9321df71b2cf30a0745b5&ipo=images"}]
  return (
    <div className='containerr'>
        {Players.map((elem)=><PlayerCard player={elem}/>)}
    </div>
  )
}

export default Players