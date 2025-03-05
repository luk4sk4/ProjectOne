import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions, Linking, ScrollView, Modal, PanResponder, Animated  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import paquete from '../assets/linkscode';

const Tab = createMaterialTopTabNavigator();
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

interface CustomTabBarProps {
  state: any; // Define los tipos correctamente
  descriptors: any; // Define los tipos correctamente
  navigation: any; // Define los tipos correctamente
  // ... Otras props
}
const CustomTabBar: React.FC<CustomTabBarProps> = ({ state, descriptors, navigation }) => {
  const images = {
    Homescreen: require('./assets/icons/casa.png'),
    Likes: require('./assets/icons/heart.png'),
    Postponed: require('./assets/icons/clock.png'),
    SearchPage: require('./assets/icons/search.png'),
  };

  return (
    <View style={styles.topContainer}>
      <View style={styles.top1container}>
        <TouchableOpacity style={styles.profileElement}>
          <Image
          source={require('./assets/icons/profile.png')}
          style={styles.profileImage}
          />
        </TouchableOpacity>
        <View style={styles.logoElement}>
          <Image
            source={require('./assets/icons/logo.png')}
            style={styles.LogoImage}
          />
        </View>
        <TouchableOpacity style={styles.settingsElement}> 
        <Image
          source={require('./assets/icons/settings.png')}
          style={styles.settingsImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabMenu}>
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <View
            key={index}
            style={styles.tabMenuTrueElements}
            > 
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              key={index}
              style={[styles.tabMenuElements, isFocused ? styles.selectedTabMenuElement : null]}
            >
              <Image
                source={images[route.name]}
                style={styles.tabMenuImages}
              />
            </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

interface UrlGrabber {
  elementIndex: any;
  elementPackage: any;
}

const UrlGrabber: React.FC<UrlGrabber> = ({ elementPackage, elementIndex }) => {

  let url1;
  let url2;
  let url3;
  let url4;

  let link;
  let marca;
  let price;

  if (elementPackage[elementIndex] !== undefined) {
    url1 = elementPackage[elementIndex].imagen1;
    url2 = elementPackage[elementIndex].imagen2;
    url3 = elementPackage[elementIndex].imagen3;
    url4 = elementPackage[elementIndex].imagen4;
    link = elementPackage[elementIndex].url;
    price = elementPackage[elementIndex].precio;
    marca = elementPackage[elementIndex].marca;
  } else {
    url1 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fui-beast-4%2F32%2FUi-12-1024.png&f=1&nofb=1&ipt=483cf92f216d0e6e785fe4c58ef3436e017628c3dd572dc89ab437896a42d05c&ipo=images';
    url2 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fui-beast-4%2F32%2FUi-12-1024.png&f=1&nofb=1&ipt=483cf92f216d0e6e785fe4c58ef3436e017628c3dd572dc89ab437896a42d05c&ipo=images';
    url3 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fui-beast-4%2F32%2FUi-12-1024.png&f=1&nofb=1&ipt=483cf92f216d0e6e785fe4c58ef3436e017628c3dd572dc89ab437896a42d05c&ipo=images';
    url4 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fui-beast-4%2F32%2FUi-12-1024.png&f=1&nofb=1&ipt=483cf92f216d0e6e785fe4c58ef3436e017628c3dd572dc89ab437896a42d05c&ipo=images';
    link = 'N/A';
    price = 'N/A';
    marca = 'N/A';
  }
  let elementslist = [ url1, url2, url3, url4, link, marca, price ]
  return elementslist
};

interface SwipeableImage {
  elementPackage: any;
  onLike: any;
  onPostpone: any;
  onDislike: any;
  elementIndex: any;
  onImageOneClick: any;
  onImageTwoClick: any;
  onImageThreeClick: any;
  mainIndex: any;
  firstIndex: any;
  secondIndex: any;
  thirdIndex: any;
  AbrirEnGoogle: any;
  onFavorite: any;
}

const SwipeableImage: React.FC<SwipeableImage> = ({ elementPackage, onLike, onPostpone, onDislike, elementIndex, onImageOneClick, onImageTwoClick, onImageThreeClick, mainIndex, firstIndex, secondIndex, thirdIndex, AbrirEnGoogle, onFavorite }) => {
  const [icon, setIcon] = useState(require('./assets/icons/fullpng.png'));
  const [tilted, setTilted] = useState('0deg');

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      if (gesture.dx > 30) {
        setIcon(require('./assets/icons/like.png'));
        setTilted('10deg');

      } else if (gesture.dx < -30) {
        setIcon(require('./assets/icons/dislike.png'));
        setTilted('-10deg');
      } else if (gesture.dy > 30) {
        setIcon(require('./assets/icons/reloj2.png'));
        setTilted('0deg');
      } else {
        setIcon(require('./assets/icons/fullpng.png'));
        setTilted('0deg');
      }
    },
    onPanResponderRelease: (_, gesture) => {
      if (gesture.dx > 30) {
        onLike();
      } else if (gesture.dx < -30) {
        onDislike();
      } else if (gesture.dy > 30) {
        onPostpone();
      }
      setIcon(require('./assets/icons/fullpng.png'));
      setTilted('0deg');
    },
  });
  
  return (
  <View style={styles.swipeablePageContainer}>
    <View style={styles.swipeableoContainerBackground}>
    <View style={[styles.swipeableContainerTrue, {transform: [{ rotate: tilted }]} ]}>
      <View {...panResponder.panHandlers}  style={styles.swipeableContainer}> 
        <View style={styles.inImageSwipeableContainer}> 
          <View style={styles.mainImageContainer}>
            <Image style={styles.mainImage} 
              source={{ uri: UrlGrabber({elementPackage, elementIndex})![mainIndex] }}
              />
            <View style={styles.inImageTextContainer}>
              <Text style={styles.inImageBrand}>{UrlGrabber({elementPackage, elementIndex})![5]}</Text>
              <Text style={styles.inImagePrice}>{UrlGrabber({elementPackage, elementIndex})![6]}</Text>
            </View>
            <View style={styles.inImageLikeContainer}>
              <Image source={icon} style={styles.inImageLike} />
            </View>
            <View style={styles.inImageButtonsContainer}>
              <TouchableOpacity onPress={AbrirEnGoogle} style={styles.inImageUrlElement}>
                <Image style={styles.inImageUrlImage} source={require('./assets/icons/link.png')}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={onFavorite} style={styles.inImageFavoriteElement}>
                <Image style={styles.inImageFavoriteImage} source={require('./assets/icons/favoriteno.png')}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.underImagesContainer}>
              {/* Imágenes pequeñas */}
              <TouchableOpacity onPress={onImageOneClick}>
                <Image style={styles.underImages} 
                  source={{ uri: UrlGrabber({elementPackage, elementIndex})![firstIndex]}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={onImageTwoClick}>
                <Image style={styles.underImages} 
                  source={{ uri: UrlGrabber({elementPackage, elementIndex})![secondIndex]}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={onImageThreeClick}>
                <Image style={styles.underImages} 
                  source={{ uri: UrlGrabber({elementPackage, elementIndex})![thirdIndex]}}/>
              </TouchableOpacity>
          </View>
          </View>
        </View>
      </View>
    </View>
    <View style={styles.swipersContainer}>
      {/* Botones para Likes, Postpone y Dislikes */}
      <TouchableOpacity  style={styles.swipersLeft} onPress={onDislike}>
        <Image  style={styles.swipersImage}
          source={require('./assets/icons/brokenheart.png')} // Ajusta la ruta de la imagen
        />
      </TouchableOpacity>

      <TouchableOpacity  style={styles.swipersMiddle} onPress={onPostpone}>
        <Image style={styles.swipersImage}
          source={require('./assets/icons/clock.png')} // Ajusta la ruta de la imagen
          />
        </TouchableOpacity>
      <TouchableOpacity  style={styles.swipersRight} onPress={onLike}>
      <Image style={styles.swipersImage}
          source={require('./assets/icons/heart.png')} // Ajusta la ruta de la imagen
        />
      </TouchableOpacity>
    </View>
  </View>
)};

interface LikedPage {
  likedElements: any;
  handleRightArrowPress: any;
  favoriteElements: any;
  abrirEnGoogle: any;
}

const LikedPage: React.FC<LikedPage> = ({ likedElements, handleRightArrowPress, favoriteElements, abrirEnGoogle }) => {
  const [propiedad1, setPropiedad1] = useState('imagen1');
  const [propiedad2, setPropiedad2] = useState('imagen2');
  const [propiedad3, setPropiedad3] = useState('imagen3');
  const [propiedad4, setPropiedad4] = useState('imagen4');
  const [displaySelected, setDisplaySelected] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  const resetPropiedades = () => {
    setPropiedad1('imagen1');
    setPropiedad2('imagen2');
    setPropiedad3('imagen3');
    setPropiedad4('imagen4');
  }

  const handleImagePressOut = (index: any) => {
    const updatedState = [...isPressed];    //AQUI NO SE QUE HACER
    updatedState[index] = false;
    setIsPressed(updatedState);
  };

  const AbrirEnGoogle = () => {
    Linking.openURL(likedElements[selectedImage].url);
  };
  
  const handleImageOneClick = () => {
    let temp = propiedad1;
    setPropiedad1(propiedad2);
    setPropiedad2(temp);
  };
  
  const handleImageTwoClick = () => {
    let temp = propiedad1;
    setPropiedad1(propiedad3);
    setPropiedad3(temp);
  };
  
  const handleImageThreeClick = () => {
    let temp = propiedad1;
    setPropiedad1(propiedad4);
    setPropiedad4(temp);
  };

  const settingsPress = () => {

  };

  const displayOnePress = () => {
    setDisplaySelected(0);
  };

  const displayTwoPress = () => {
    setDisplaySelected(1);
  };

  return (
    <View style={styles.likedPage}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.likedSettingsAndDisplayContainer}>  
          <View style={styles.likedSettingsContainer}>
            <TouchableOpacity
              style={styles.likedSettingsElement}
              onPress={settingsPress}>
              <Image
              style={styles.likedSettingsImage}
              source={require('./assets/icons/sliders.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.likedDisplayContainer}>
            <TouchableOpacity 
              style={[styles.likedDisplayOneElement, displaySelected==0 && styles.likedDisplaySelected]}
              onPress={displayOnePress}>
              <Image
              style={styles.likedDisplayOneImage}
              source={require('./assets/icons/displayone.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.likedDisplayTwoElement, displaySelected==1 && styles.likedDisplaySelected]}
              onPress={displayTwoPress}>
              <Image
              style={styles.likedDisplayTwoImage}
              source={require('./assets/icons/displaylots.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        {displaySelected==0 ? (
          <View>
          {likedElements.map((element: any, index: any) => (
            <View key={index}>
              <View style={styles.likedEachElement}>
                <View style = {styles.likedDisplayOneImageBox}>
                  <View style = {styles.likedTopName}>
                    <Text>JERSEY</Text>
                  </View>
                  <View style={styles.mainImageLikedContainer}>
                  {element && (element.imageFocus === null || element.imageFocus === undefined) ? (
                    <Image style={styles.mainImage} source={{ uri: element.imagen1 }} />
                  ) : element && element.imageFocus === 1 ? (
                    <Image style={styles.mainImage} source={{ uri: element.imagen2 }} />
                  ) : element && element.imageFocus === 2 ? (
                    <Image style={styles.mainImage} source={{ uri: element.imagen3 }} />
                  ) : element && element.imageFocus === 3 ? (
                    <Image style={styles.mainImage} source={{ uri: element.imagen4 }} />
                  ) : element && element.imageFocus === 4 ? (
                    <Image style={styles.mainImage} source={{ uri: element.imagen1 }} />
                  ) : null}
                    <View style={styles.inImageTextContainer}>
                      <Text style={styles.inImageBrand}>{element.marca}</Text>
                      <Text style={styles.inImagePrice}>{element.precio}</Text>
                    </View>
                    <View style={styles.inImageButtonsContainer}>
                      <TouchableOpacity style={styles.inImageUrlElement}>
                        <Image style={styles.inImageUrlImage} source={require('./assets/icons/link.png')}/>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.inImageFavoriteElement}>
                        <Image style={styles.inImageFavoriteImage} source={require('./assets/icons/favoriteno.png')}/>
                      </TouchableOpacity>
                    </View>
                  
                  </View>
                </View>
                <View style={styles.likedImageArrows}>
                <TouchableOpacity  style={styles.arrowLeft}>
                  <Image  style={styles.arrowImage}
                    source={require('./assets/icons/leftarrow.png')} // Ajusta la ruta de la imagen
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRightArrowPress(index)} style={styles.arrowRight}>
                  <Image  style={styles.arrowImage}
                    source={require('./assets/icons/rightarrow.png')} // Ajusta la ruta de la imagen
                  />
                </TouchableOpacity>
                </View>
                <View style={styles.likedUnderButtons}>
                <TouchableOpacity  style={styles.swipersLeft}>
                  <Image  style={styles.swipersImage}
                    source={require('./assets/icons/brokenheart.png')} // Ajusta la ruta de la imagen
                  />
                </TouchableOpacity>
                <TouchableOpacity  style={styles.swipersMiddle}>
                  <Image style={styles.swipersImage}
                    source={require('./assets/icons/share.png')} // Ajusta la ruta de la imagen
                    />
                  </TouchableOpacity>
                <TouchableOpacity  style={styles.swipersRight}>
                <Image style={styles.swipersImage}
                    source={require('./assets/icons/shopping.png')} // Ajusta la ruta de la imagen
                  />
                </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
          </View>
        ) : null}
        {displaySelected==1 ? (
          <View>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

const SearchPage = () => (
  <View style={styles.pageContainer}>
    <Text style={styles.overlayTextRight}>Zara</Text>
  </View>
);

const HomeScreen = () => {

  const [likedElements, setLikedElements] = useState([]);
  const [favoriteElements, setFavoriteElements] = useState([]);
  const [postponedElements, setPostponedElements] = useState([]);
  const [currentElementIndex, setCurrentElementIndex] = useState(0);
  const [currentPostponedElementIndex, setCurrentPostponedElementIndex] = useState(0);
  const [mainIndex, setMainIndex] = useState(0);
  const [firstIndex, setFirstIndex] = useState(1);
  const [secondIndex, setSecondIndex] = useState(2);
  const [thirdIndex, setThirdIndex] = useState(3);
  const [toFav, setToFav] = useState(false);
  
  
  const indexResetAndJump = () => {
    setMainIndex(0);
    setFirstIndex(1);
    setSecondIndex(2);    
    setThirdIndex(3);
    setCurrentElementIndex(currentElementIndex + 1);
  };

  const indexPostponedResetAndJump = () => {
    setMainIndex(0);
    setFirstIndex(1);
    setSecondIndex(2);    
    setThirdIndex(3);
    setCurrentPostponedElementIndex(currentPostponedElementIndex + 1);
  };

  const AbrirEnGoogle = () => {
    let elementIndex = currentElementIndex
    Linking.openURL(UrlGrabber({ elementPackage: paquete, elementIndex})[4]);
  };

  const AbrirEnGooglePostponed = () => {
    let elementIndex = currentPostponedElementIndex
    Linking.openURL(UrlGrabber({ elementPackage: postponedElements, elementIndex})[4]);
  };

  const HandleFavoriteAndSetFav = () => {
    setFav();
    handleFavorite();
  }

  const setFav = () => {
    setToFav(true);
  }

  useEffect(() => {
    if (toFav == true) {
      likedElements[likedElements.length-1].isFav = true;
      setToFav(false);
    }
  }, [likedElements, toFav]);

  const handleFavorite = () => {
    setLikedElements([...likedElements, paquete[currentElementIndex]]);
    indexResetAndJump();
  };

  const HandlePostponedFavoriteAndSetFav = () => {
    setFav();
    handlePostponedFavorite();
  }

  const handlePostponedFavorite = () => {
    setLikedElements([...likedElements, postponedElements[currentPostponedElementIndex]]);
    indexPostponedResetAndJump();
  }

  const handleLike = () => {
    setLikedElements([...likedElements, paquete[currentElementIndex]]);
    indexResetAndJump();
  };

  const handlePostpone = () => {
    setPostponedElements([...postponedElements, paquete[currentElementIndex]]);
    indexResetAndJump();
  };

  const handleDislike = () => {
    console.log('Disliked');
    indexResetAndJump();
  };
  
  const handleImageOneClick = () => {
    let temp = mainIndex;
    setMainIndex(firstIndex);
    setFirstIndex(temp);
  };
  
  const handleImageTwoClick = () => {
    let temp = mainIndex;
    setMainIndex(secondIndex);
    setSecondIndex(temp);
  };
  
  const handleImageThreeClick = () => {
    let temp = mainIndex;
    setMainIndex(thirdIndex);
    setThirdIndex(temp);
  };

  const handlePostponedLike = () => {
    setLikedElements([...likedElements, postponedElements[currentPostponedElementIndex]]);
    indexPostponedResetAndJump();
  };

  const handlePostponedPostpone = () => {
    setPostponedElements([...postponedElements, postponedElements[currentPostponedElementIndex]]);
    indexPostponedResetAndJump();
    };

  const handlePostponedDislike = () => {
    console.log('Disliked');
    indexPostponedResetAndJump();
  };

  const handleRightArrowPress = (index) => {
    const updatedLikedElements = likedElements.map((element, idx) => {
      if (idx === index) {
        if (element.hasOwnProperty('imageFocus')) {
          if (element['imageFocus'] === 4) {
            element['imageFocus'] = 1;
          } else {
            element['imageFocus'] += 1;
          }
        } else {
          element['imageFocus'] = 1;
        }
      }
    });
  
    // Actualizar el estado con los elementos actualizados
    setLikedElements(updatedLikedElements);
  };


  return (
    <View style={styles.generalContainer}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <CustomTabBar {...props} />}
          screenOptions={{ swipeEnabled: false }}>
          <Tab.Screen name="Homescreen">
            {() => (
                <SwipeableImage
                  elementPackage={paquete}
                  onLike={handleLike}
                  onPostpone={handlePostpone}
                  onDislike={handleDislike}
                  elementIndex={currentElementIndex}
                  onImageOneClick={handleImageOneClick}
                  onImageTwoClick={handleImageTwoClick}
                  onImageThreeClick={handleImageThreeClick}
                  mainIndex={mainIndex}
                  firstIndex={firstIndex}
                  secondIndex={secondIndex}
                  thirdIndex={thirdIndex}
                  AbrirEnGoogle={AbrirEnGoogle}
                  onFavorite={HandleFavoriteAndSetFav}
                />
            )}
          </Tab.Screen>
          <Tab.Screen name="Likes">
            {() => <LikedPage
            likedElements={likedElements}
            favoriteElements={favoriteElements}
            handleRightArrowPress={handleRightArrowPress}
            />}
          </Tab.Screen>
          <Tab.Screen name="Postponed">
            {() => (
              <SwipeableImage
                elementPackage={postponedElements}
                onLike={handlePostponedLike}
                onPostpone={handlePostponedPostpone}
                onDislike={handlePostponedDislike}
                elementIndex={currentPostponedElementIndex}
                onImageOneClick={handleImageOneClick}
                onImageTwoClick={handleImageTwoClick}
                onImageThreeClick={handleImageThreeClick}
                mainIndex={mainIndex}
                firstIndex={firstIndex}
                secondIndex={secondIndex}
                thirdIndex={thirdIndex}
                AbrirEnGoogle={AbrirEnGooglePostponed}
                onFavorite={HandlePostponedFavoriteAndSetFav}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="SearchPage" component={SearchPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
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

  //MAIN IMAGE
  mainImageContainer: {
    margin: 10,
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

  //TOPDISPLAY1

  top1container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT/14,
    marginTop: 40,
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

});

export default HomeScreen;