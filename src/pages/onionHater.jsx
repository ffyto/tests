
function OnionHater() {
  let texto = '';
  const handlerChange = (evt) => {
    const value = evt.target.value;
    if (value.toLowerCase().includes('cebolla')) {
      alert('Odio la cebolla')
    };
  }
    return (
      <div>
        <textarea id="cebolla" name="cebolla" rows="10" columns="30" placeholder="Escribe que ingredientes pones a una ensalada. No escribas cebolla o una alerta saltara." onChange={handlerChange}/>
      </div>
    )
}

export default OnionHater;