/**
 * 
 * Esta funcion extra el titulo, la imagen y la url de la publicón selecionada
 * 
 */

function INFO_MELI(tipo, id) {
  try {
    var response = UrlFetchApp.fetch(
      "https://api.mercadolibre.com/items/" + id
    );
  } catch (error) {
    return "Verifique que Ingreso el ID correcto";
  }
  var json = response.getContentText();
  var data = JSON.parse(json);

  switch (tipo) {
    case "Titulo":
      return data.title;
      break;
    case "Imagen":
      return data.pictures[0].secure_url;
      break;
    case "url":
      return data.permalink;
      break;
  }
}
