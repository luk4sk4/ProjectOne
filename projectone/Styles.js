import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    imageContainer: {
      flex: 1,
    },
    image: {
      width: SCREEN_WIDTH-50,
      height: SCREEN_WIDTH-50,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: '10%',
      borderWidth: 1,
      borderRadius: 20,
      borderColor: '#373737',
    },
    buttonsContainer: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    smallbuttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      },
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      },
    buttonImage: {
      width: 50,
      height: 50,
    },
    button: {
      backgroundColor: 'lightblue',
      padding: 10,
      margin: 10,
      borderRadius: 8,
    },
    pageContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
    },
    gridImage: {
      width: SCREEN_WIDTH / 3+20,
      height: SCREEN_WIDTH / 3+20,
      margin: 5,
      resizeMode: 'cover',
      borderWidth: 0.3,
      borderRadius: 20,
      borderColor: '#373737',
    },
    smallImagesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
      marginBottom: 70,
    },
    smallImage: {
      width: SCREEN_WIDTH / 4,
      height: SCREEN_WIDTH / 4,
      resizeMode: 'cover',
      marginHorizontal: 5,
      margin: 1,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: '#373737',
    },
    smallImageButton: {
      width: SCREEN_WIDTH / 4, 
      height: SCREEN_WIDTH / 4, 
      resizeMode: 'cover',
      marginHorizontal: 5,
      margin: 1,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: '#373737',
    },
    overlayContainer: {
      justifyContent: 'flex-end',
      marginHorizontal: 10,
      alignItems: 'baseline',
      padding: 1,
    },
    
    overlayTextRight: {
      color: 'black',
      fontSize: 20, 
      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      alignItems: 'flex-start',
      padding: 5,
      borderRadius: 10,
      position: 'absolute',
      bottom: 10,
      right: 85,
    },
    
    overlayTextLeft: {
      color: 'black', 
      fontSize: 20, 
      fontWeight: 'bold', 
      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      alignItems: 'flex-end',
      padding: 5,
      borderRadius: 10,
      position: 'absolute',
      bottom: 10,
      left: 45,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    miniImage: {
      width: '10%', 
      height: '10%', 
      resizeMode: 'contain',
      position: 'absolute',
      top: 10,
      right: 50,
    },
    gridContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      padding: 5,
    },
    touchableOpacityStyle: {
      borderWidth: 1,
      borderRadius: 8,
      overflow: 'hidden',
      borderColor: 'transparent'
    },
    pressedStyle: {
      borderColor: 'transparent', 
      borderWidth: 1,
      borderRadius: 8,
    },
    urlimage: {
      width: 40,
      height: 40,
      padding: 20,
      borderWidth: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
      borderRadius: 10,
    },
    urlbutton: {
      position: 'absolute',
      top: 10,
      right: 50,
    },
    favoriteimage: {
      width: 40, 
      height: 40,
      padding: 20,
      borderWidth: 1,
      borderRadius: 10,
    },
    favoritebutton: {
      position: 'absolute',
      top: 10,
      left: 50,
    },
    favoriteimagesmall: {
      width: 25, 
      height: 25,
      padding: 5,
      borderWidth: 1,
      borderRadius: 10,
    },
    favoriteiconsmall: {
      position: 'absolute',
      top: 10,
      left: 10,
    },
    logo_back_container: {
      display: 'flex',
      flexDirection: 'row',  
      padding: 15, 
      backgroundColor: 'rgba(245, 245, 245, 0.5)', 
      borderRadius: 10,
      marginRight: 30,
      marginLeft: 10,
      marginBottom: 20,
    },
    back: {
      width: 30, 
      height: 30, 
    },
    logo: {
      width: 30, 
      height: 30,
      alignSelf: 'center',
      position: 'absolute',
      right: 10,
    },
  
    // GENERAL CONTAINER
  
    generalContainer: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
  
    shadowProp: {
      shadowColor: '#E0C097',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 1,
      elevation: 10,
    },
  
    //MAIN PAGE CONTAINER
    swipeablePageContainer: {
      flexDirection: 'column',
      flex: 1,
      alignItems: "center",
      backgroundColor: '#e3dad0',
    },
  
    //SWIPEABLE CONTAINER
    swipeableoContainerBackground: {
      backgroundColor: '#dbccbb',
      width: SCREEN_WIDTH,
    },
  
    swipeableContainerTrue: {
      marginVertical: 40,
      marginHorizontal: 20,
      borderRadius: 20,
      borderWidth: 1,
    },
  
    swipeableContainer: {
      borderRadius: 20,
    },

    topImageName: {
      position: 'absolute',
      top: -10,
      left: (SCREEN_WIDTH-40)/2-100,
      backgroundColor: '#dbccbb',
      alignItems: "center",
      justifyContent: 'center',
      width:200,
      paddingHorizontal: 5,
    },

    topImageText: {
      fontWeight: 'bold',
      fontSize: 16,
      color: 'black',
    },
  
    //MAIN IMAGE
    mainImageContainer: {
      marginTop: 15,
      margin: 5,
    },
    mainImage: {
      width: SCREEN_WIDTH-50,
      height: SCREEN_WIDTH-50,
      resizeMode: 'cover',
      borderWidth: 1,
      borderRadius: 20,
      borderColor: '#373737',
    },
  
    //IN IMAGE ELEMENTS
  
    inImageTextContainer:{
      flexDirection: "row",
      position: 'absolute',
      bottom: 1,
      justifyContent: 'space-between',
      alignItems: 'baseline',
      width: SCREEN_WIDTH-50,
    },
  
    inImageBrand: {
      color: '#14110F',
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: 'rgba(240, 240, 240, 0.8)',
      padding: 5,
      borderRadius: 10,
      marginHorizontal: 10,
    },
  
    inImagePrice: {
      color: '#14110F',
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: 'rgba(240, 240, 240, 0.8)',
      padding: 5,
      borderRadius: 10,
      marginHorizontal: 10,
    },
  
    inImageButtonsContainer:{
      flexDirection: "row-reverse",
      position: 'absolute',
      top: 1,
      justifyContent: 'space-between',
      width: SCREEN_WIDTH-50,
    },
  
    inImageFavoriteElement: {
      margin: 10,
      width: 40,
      height: 40,
    },
  
    inImageFavoriteImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
  
    inImageUrlElement: {
      margin: 10,
      width: 40,
      height: 40,
    },
  
    inImageUrlImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    //IN IMAGE SWIPE LEFT/RIGHT
    inImageSwipeableContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    inImageLikeContainer: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    inImageLike: {
      margin: 10,
      width: '50%',
      height: '50%',
    },
  
    //SWIPERS (ICONOS DE LIKE/DISLIKE/POSTPONE)
    swipersContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'space-evenly',
      backgroundColor: '#e3dad0',
      marginVertical: 20,
      marginHorizontal: 10,
      borderRadius: 10,
    },
    swipersLeft: {
      flex:1,
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
    },
    swipersMiddle: {
      flex:1,
      width: 60,
      height: 60,
      borderRightWidth:1,
      borderLeftWidth:1,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    swipersRight: {
      flex:1,
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
    },
    swipersImage:{
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
  
    //UNDER IMAGES (LAS 3 QUE ESTAS DEBAJO)
    underImagesContainer:{
      alignSelf: 'stretch',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      margin: 5,
    },
    underImages: {
      width: 100,
      height: 100,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: 'black',
    },
  
    //LIKED PAGE 
  
    likedPageContainer: {
      flex: 1,
      backgroundColor: '#F3F3F3',
    },
  
    scrollViewLikedContainer: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    likedGridContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },
  
    likedElementContainer: {
      margin: 5,
      width: SCREEN_WIDTH / 3+20,
      height: SCREEN_WIDTH / 3+20,
  
    },
  
    likedElementImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderColor: '#373737',
      borderWidth: 0.3,
      borderRadius: 20,
    },
  
    likedPageFavoriteElement: {
      position: 'absolute',
      top: 10,
      left: 10,
    },
  
    likedPageFavoriteImage: {
      width: 25,
      height: 25,
      padding: 5,
      borderWidth: 1,
      borderRadius: 10,
    },
  
    //TOP DISPLAY
    topContainer: {
      backgroundColor: '#e3dad0',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
  
    invisible: {
      display: 'none',
    },
  
    //TOPDISPLAY1
  
    top1container: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT/14,
      marginTop: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth:1,
      },
  
    profileElement: {
      height: SCREEN_HEIGHT/14 - 10,
      width: SCREEN_HEIGHT/14 - 10,
      margin: 5,
      },
    
    profileImage: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
      },
  
    logoElement: {
      height: SCREEN_HEIGHT/14 - 10,
      width: SCREEN_HEIGHT*4/14 - 10,
      margin: 5,
      },
    
    LogoImage: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
      },
  
    settingsElement: {
      height: SCREEN_HEIGHT/14 - 10,
      width: SCREEN_HEIGHT/14 - 10,
      margin: 5,
      },
    
    settingsImage: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
      },
  
    //TAB MENU
    tabMenu: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT/10,
      flexDirection: 'row', 
      justifyContent: 'space-evenly',
    },
  
    tabMenuTrueElements:{
      width: SCREEN_WIDTH/4,
      height: SCREEN_HEIGHT/10,
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    tabMenuElements:{
      width: '80%',
      height: '80%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabMenuImages:{
      width: '90%',
      height: '90%',
      resizeMode: 'contain',
    },
    selectedTabMenuElement: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      borderRadius: 5,
      borderEndWidth: 0,
      borderStartWidth:0,
    },
  
  
    //LIKED PAGE
    likedPage: {
      flex: 1,
      backgroundColor: '#e3dad0',
    },
    scrollViewContainer: {
      flex: 1,
  
    },
    likedSettingsAndDisplayContainer: {
      width: SCREEN_WIDTH,
      height: 75,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
    },
    likedSettingsContainer: {
      marginHorizontal:20,
      width: 70,
      height: 70,
      alignItems:'center',
      justifyContent:'center',
    },
    likedSettingsElement: {
      width: 60,
      height: 60, 
      alignItems:'center',
      justifyContent:'center',
    },
    likedSettingsImage: {
      width: '80%',
      height: '80%', 
    },
    likedDisplayContainer:{
      marginHorizontal:20,
      width: 140,
      height: 70,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center',
    },
    likedDisplayOneElement: {
      width: 60,
      height: 60, 
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 10,
    },
    likedDisplayOneImage: {
      width: '90%',
      height: '90%',
    },
    likedDisplayTwoElement: {
      width: 60,
      height: 60, 
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 10,
    },
    likedDisplayTwoImage: {
      width: '90%',
      height: '90%',
    },
    likedDisplaySelected: {
      borderBottomWidth: 1,
    },
    
    //APLICANDO EL DISPLAY ONE RAZONES UNICAS
  
    likedEachElement: {
      backgroundColor: '#dbccbb',
      marginVertical: 10,
      alignItems:'center',
    },
    likedDisplayOneImageBox: {
      borderWidth: 1,
      borderRadius: 20,
      margin: 10,
    },
    likedTopName: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
  
    },
    likedUnderButtons: {
      width: SCREEN_WIDTH,
      flexDirection: 'row',
      marginBottom: 10,
    },
    likedImageArrows: {
      width: SCREEN_WIDTH-40,
      height: 50,
      position: 'absolute',
      top: 160,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    mainImageLikedContainer: {
      marginTop: 5,
      marginHorizontal: 5,
      marginBottom: 10,
    },
    arrowLeft: {
      width: 50,
      height: 50,
    },
    arrowRight: {
      width: 50,
      height: 50,
    },
    arrowImage: {
      width: '100%',
      height: '100%',
    },

    //SEARCHPAGE

    backgroundSearchPage: {
      width: '100%',
      height: '100%',
      flex: 1,
      backgroundColor: '#dbccbb',
      alignItems: 'center',
      flexDirection: 'column',
    },
    utilities: {
      width: SCREEN_WIDTH,
      height: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    backSearchPage: {
      height: 75,
      width: 75,
      marginHorizontal: 10,
    },

    searchSearchPage: {
      height: 75,
      width: 200,
      marginHorizontal: 10,
    },

    FiltersSearchPage: {
      height: 75,
      width: 75,
      marginHorizontal: 10,
    },

    searchSearchPageImage: {
      height: '100%',
      width: '100%',
    },
  
  });