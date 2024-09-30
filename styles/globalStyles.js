import { StyleSheet } from "react-native";
import colortheme from './colors';

const styles = StyleSheet.create({
  cardContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: colortheme.secondary
  },
  card: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title1: {
    color: colortheme.primary,
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 20,
    padding: 5,
  },
  subInfo: {
    fontSize: 9,
  },
  picture: {
    width: 100,
    height: 100,
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
    backgroundColor: colortheme.background,
    margin:50
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
  },
  input: {
    backgroundColor: "#FFFF",
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
});

export default styles;