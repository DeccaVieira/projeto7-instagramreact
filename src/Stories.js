export default function Stories() {
const story = [
    {imgProfile: "assets/img/respondeai.svg", nameProfile:"Responde_aí"},
    {imgProfile: "assets/img/smallcutecats.svg", nameProfile:"CuteCats"},
    {imgProfile: "assets/img/9gag.svg", nameProfile:"9gag"},
    {imgProfile: "assets/img/catanacomics.svg", nameProfile:"Catanacomics"},
    {imgProfile: "assets/img/chibirdart.svg", nameProfile:"ChiBirdDart"},
    {imgProfile: "assets/img/dog.svg", nameProfile:"Dog"},
    {imgProfile: "assets/img/lolo.jpg", nameProfile:"LôLô"},
    {imgProfile: "assets/img/memeriagourmet.svg", nameProfile:"Memeria.Gourmet"},
    {imgProfile: "assets/img/nathanwpylestrangeplanet.svg", nameProfile:"StragnePlanet"},
    {imgProfile: "assets/img/razoesparaacreditar.svg", nameProfile:"Razões_para_Acreditar"}
   ]

    return (
        <div class="stories">
            {story.map((s) => (
            <div class="story">
                <div class="imagem">
                    <img src={s.imgProfile} alt = ""/>
                </div>
                <div class="usuario">
                    {s.nameProfile}
                </div>
            </div>
            ))}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
       
    )
}