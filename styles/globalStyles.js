import { StyleSheet } from "react-native";
import colortheme from './colors';

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: colortheme.secondary,
    paddingHorizontal: 10,
  },
  card: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
  },
  title1: {
    color: colortheme.secondaryText,
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold'
  },
  titleDetail: {
    color: colortheme.secondaryText,
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitulo: {
    color: colortheme.secondaryText,
    fontSize: 15,
    padding: 5,
    fontWeight: 'bold',
  },
  Detailcontainer: {
    height: '70%',
    backgroundColor: '#fff',
    padding: 0,
    borderRadius: 35,
    justifyContent: 'center',
  },
  contextDetail: {
    marginVertical: 12,
  },
  title: {
    color: colortheme.secondaryText,
    fontSize: 20,
    padding: 5,
  },
  subInfo: {
    fontSize: 9,
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginRight: 10
  },
  pictureDetaile: {
    width: '100%', // Ocupa todo el ancho disponible
    height: 400,   // Ajusta la altura según lo que necesites
    resizeMode: 'cover'
  },
  pictureCategories: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null,
    borderRadius: 50,
    marginRight: 10
  },
  logo: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#110303'
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 50
  },
  text: {
    color: colortheme.text,
    fontSize: 18,
  },
  button: {
    backgroundColor: colortheme.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    alignItems: 'center',
  },
  buttonInline: {
    borderColor: colortheme.primary,
    borderWidth: 2, // Ancho del borde
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 5,
    alignItems: 'center',
    backgroundColor: 'transparent', // Fondo transparente
  },
  buttonText: {
    color: colortheme.background,
    fontSize: 16,
  },
  buttonInlineText: {
    color: colortheme.primary, // Color del texto que coincide con el borde
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    paddingVertical: 20,
    fontSize: 16,
    padding: 60
  },
  input: {
    backgroundColor: "#eee",
    height: 40,
    marginVertical: 12,
    paddingLeft: 20,
    borderRadius: 8,
    justifyContent: 'flex-start'
  },
  validationText: {
    paddingLeft: 10,
    color: colortheme.primary,
    fontSize: 13,
    textAlign: 'left',
  },
  containerImage: {           // Ocupa todo el espacio disponible
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center',     // Centra horizontalmente
  },
  element: {
    backgroundColor: '#EBEBEB',
    display: 'block',
    color: colortheme.text,
    borderRadius: 30,
    padding: 10
  },
  containerCard: {
    borderRadius: 35,
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: '100%',
    paddingVertical: 35
  },
  price: {
    marginLeft: 'auto',
    marginTop:50, // Esto empuja el precio al extremo derecho
    fontSize: 16,
    color: colortheme.secondaryText,
    fontWeight: 'bold',
  },
    hr: {
    borderBottomColor: 'gray', // Color de la línea
    borderBottomWidth: 1, // Grosor de la línea
    width: '100%', // O puedes ajustar el ancho como prefieras
    marginVertical: 10, // Espacio vertical alrededor de la línea
  },
});

export default styles;