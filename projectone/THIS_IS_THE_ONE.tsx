import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions, Linking, ScrollView, Modal, PanResponder, Animated  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import paquete from './assets/linkscode';
import { styles } from './Styles';
import FetchDataId from './modules/data_by_id';

const Tab = createMaterialTopTabNavigator();
interface CustomTabBarProps {
  state: any; // Define los tipos correctamente
  descriptors: any; // Define los tipos correctamente
  navigation: any; // Define los tipos correctamente
  isInvisible: any;
  setIsInvisible: any;
  // ... Otras props
}
const CustomTabBar: React.FC<CustomTabBarProps> = ({ isInvisible, setIsInvisible, state, descriptors, navigation }) => {
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
      <View style={isInvisible ? styles.invisible : styles.tabMenu}>
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
              if (route.name == 'SearchPage'){setIsInvisible();}
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
  let data = FetchDataId({ id: '1' });
  console.log(data);

  let url1;
  let url2;
  let url3;
  let url4;
  let link;
  let marca;
  let price;

  if (data !== undefined) {
    url1 = data.imagen1;
    url2 = data.imagen2;
    url3 = data.imagen3;
    url4 = data.imagen4;
    link = data.url;
    price = data.precio;
    marca = data.shop;
    console.log(link)
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
        <View style={styles.topImageName}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.topImageText}>MASSIMO DUTTIFREE EL MASSIMO</Text>
        </View>
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

const SearchPage = ({setIsInvisible, elementPackage, onLike, onPostpone, onDislike, elementIndex, onImageOneClick, onImageTwoClick, onImageThreeClick, mainIndex, firstIndex, secondIndex, thirdIndex, AbrirEnGoogle, onFavorite}) => (

  <View style={styles.pageContainer}>
    <View style={styles.backgroundSearchPage}> 
    <View style={styles.utilities}>
      <TouchableOpacity onPress={setIsInvisible} style={styles.backSearchPage}>
      <Image style={styles.searchSearchPageImage}
        source={require('./assets/icons/backarrow.png')}/>
      </TouchableOpacity>
      <View style={styles.searchSearchPage}>
      <Image style={styles.searchSearchPageImage}
        source={require('./assets/icons/search.png')}/>
      </View>
      <TouchableOpacity style={styles.FiltersSearchPage}>
      <Image style={styles.searchSearchPageImage}
        source={require('./assets/icons/sliders.png')}/>
      </TouchableOpacity>
    </View>
    <SwipeableImage
      elementPackage={elementPackage}
      onLike={onLike}
      onPostpone={onPostpone}
      onDislike={onDislike}
      elementIndex={elementIndex}
      onImageOneClick={onImageOneClick}
      onImageTwoClick={onImageTwoClick}
      onImageThreeClick={onImageThreeClick}
      mainIndex={mainIndex}
      firstIndex={firstIndex}
      secondIndex={secondIndex}
      thirdIndex={thirdIndex}
      AbrirEnGoogle={AbrirEnGoogle}
      onFavorite={onFavorite}
    />
    </View>
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
  const [isInvisible, setIsInvisible] = useState (false);


  const [currentSerial, setCurrentSerial] = useState ([]);
  const [listOfSerials, setListOfSerials] = useState ([]);
  const [watchedSerials, setWatchedSerials] = useState ([]);
  const [likedSerials, setLikedSerials] = useState ([]);
  const [postponedSerials, setPostponedSerials] = useState ([]);

  
  
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

  const handleSetInvisible = () => {
    console.log('change', isInvisible)
    if (isInvisible==true) {
      setIsInvisible(false)
    } else {
      setIsInvisible(true)
    }
  }

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
          tabBar={(props) => (<CustomTabBar
          {...props} 
          isInvisible={isInvisible} 
          setIsInvisible={handleSetInvisible}
          />)}
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
          <Tab.Screen name="SearchPage">
            {()=>(
              <SearchPage
                setIsInvisible={handleSetInvisible}
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
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};



export default HomeScreen;