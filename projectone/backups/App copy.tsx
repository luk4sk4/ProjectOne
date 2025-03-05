import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions, Linking, ScrollView, Modal, PanResponder, Animated, InteractionManager  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import paquete from '../assets/linkscode'; // Ruta al archivo 'archivo.js'

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
    Homescreen: require('C:/assets/paque/AwesomeProject/resources/pngs/casa.png'), // Ruta a tu imagen para Screen1
    Likes: require('./assets/pngs/emptyheart.png'), // Ruta a tu imagen para Screen2
    Postponed: require('./assets/pngs/reloj.png'), // Ruta a tu imagen para Screen3
    SearchPage: require('./assets/pngs/search.png'), // Ruta a tu imagen para Screen4
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
        {state.routes.map((route, index) => {
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
}

const UrlGrabber: React.FC<UrlGrabber> = ({ elementIndex }) => {

  let url1;
  let url2;
  let url3;
  let url4;

  let link;
  let marca;
  let price;

  if (paquete[elementIndex] !== undefined) {
    url1 = paquete[elementIndex].imagen1;
    url2 = paquete[elementIndex].imagen2;
    url3 = paquete[elementIndex].imagen3;
    url4 = paquete[elementIndex].imagen4;
    link = paquete[elementIndex].url;
    price = paquete[elementIndex].precio;
    marca = paquete[elementIndex].marca;
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

interface UrlGrabberPostponed {
  postponedElements: any;
  elementIndex: any;
}

const UrlGrabberPostponed: React.FC<UrlGrabberPostponed> = ({ postponedElements, elementIndex }) => {

  let url1;
  let url2;
  let url3;
  let url4;

  let link;
  let marca;
  let price;

  if (postponedElements[elementIndex] !== undefined) {
    url1 = postponedElements[elementIndex].imagen1;
    url2 = postponedElements[elementIndex].imagen2;
    url3 = postponedElements[elementIndex].imagen3;
    url4 = postponedElements[elementIndex].imagen4;
    link = postponedElements[elementIndex].url;
    price = postponedElements[elementIndex].precio;
    marca = postponedElements[elementIndex].marca;
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
  if (elementIndex.length>4){
    return elementslist
  } else {
    return ['none', 'none', 'none', 'none', 'none', 'none', 'none']
  }
  
};

interface SwipeableImage {
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

const SwipeableImage: React.FC<SwipeableImage> = ({ onLike, onPostpone, onDislike, elementIndex, onImageOneClick, onImageTwoClick, onImageThreeClick, mainIndex, firstIndex, secondIndex, thirdIndex, AbrirEnGoogle, onFavorite }) => {
  const [icon, setIcon] = useState(require('./resources/icons/fullpng.png'));
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
      setIcon(require('./resources/icons/fullpng.png'));
      setTilted('0deg');
    },
  });
  
  return (
  <View style={styles.swipeablePageContainer}>
    <View style={[styles.swipeableContainerTrue, {transform: [{ rotate: tilted }]} ]}>
      <View {...panResponder.panHandlers}  style={styles.swipeableContainer}> 
        <View style={styles.inImageSwipeableContainer}> 
          <View style={styles.mainImageContainer}>
            <Image style={styles.mainImage} 
              source={{ uri: UrlGrabber({elementIndex})[mainIndex] }}
              />
            <View style={styles.inImageTextContainer}>
              <Text style={styles.inImageBrand}>{UrlGrabber({elementIndex})[5]}</Text>
              <Text style={styles.inImagePrice}>{UrlGrabber({elementIndex})[6]}</Text>
            </View>
            <View style={styles.inImageLikeContainer}>
              <Image source={icon} style={styles.inImageLike} />
            </View>
            <View style={styles.inImageButtonsContainer}>
              <TouchableOpacity onPress={AbrirEnGoogle} style={styles.inImageUrlElement}>
                <Image style={styles.inImageUrlImage} source={require('./resources/pngs/link.png')}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={onFavorite} style={styles.inImageFavoriteElement}>
                <Image style={styles.inImageFavoriteImage} source={require('./resources/pngs/favorito_no.png')}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.underImagesContainer}>
              {/* Imágenes pequeñas */}
              <TouchableOpacity onPress={onImageOneClick}>
                <Image style={styles.underImages} 
                  source={{ uri: UrlGrabber({elementIndex})[firstIndex]}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={onImageTwoClick}>
                <Image style={styles.underImages} 
                  source={{ uri: UrlGrabber({elementIndex})[secondIndex]}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={onImageThreeClick}>
                <Image style={styles.underImages} 
                  source={{ uri: UrlGrabber({elementIndex})[thirdIndex]}}/>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    <View style={styles.swipersContainer}>
      {/* Botones para Likes, Postpone y Dislikes */}
      <TouchableOpacity  style={styles.swipersLeft} onPress={onDislike}>
        <Image  style={styles.swipersImage}
          source={require('./resources/pngs/thumbsdown.png')} // Ajusta la ruta de la imagen
        />
      </TouchableOpacity>

      <TouchableOpacity  style={styles.swipersMiddle} onPress={onPostpone}>
        <Image style={styles.swipersImage}
          source={require('./resources/pngs/reloj.png')} // Ajusta la ruta de la imagen
          />
        </TouchableOpacity>
      <TouchableOpacity  style={styles.swipersRight} onPress={onLike}>
      <Image style={styles.swipersImage}
          source={require('./resources/pngs/emptyheart.png')} // Ajusta la ruta de la imagen
        />
      </TouchableOpacity>
    </View>
  </View>
)};

interface LikedPage {
  likedElements: any;
  favoriteElements: any;
}

const LikedPage: React.FC<LikedPage> = ({ likedElements, favoriteElements }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(Array(likedElements.length).fill(false));
  const [propiedad1, setPropiedad1] = useState('imagen1');
  const [propiedad2, setPropiedad2] = useState('imagen2');
  const [propiedad3, setPropiedad3] = useState('imagen3');
  const [propiedad4, setPropiedad4] = useState('imagen4');
  

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  const handleImagePressIn = (index) => {
    const updatedState = [...isPressed];
    updatedState[index] = true;
    setIsPressed(updatedState);
    resetPropiedades(likedElements[index].isFav);
    console.log()
  };

  const resetPropiedades = () => {
    setPropiedad1('imagen1');
    setPropiedad2('imagen2');
    setPropiedad3('imagen3');
    setPropiedad4('imagen4');
  }

  const handleImagePressOut = (index) => {
    const updatedState = [...isPressed];
    updatedState[index] = false;
    setIsPressed(updatedState);
  };

  const AbrirEnGoogle = () => {
    Linking.openURL(likedElements[selectedImageIndex].url);
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
  

  return (
    <View style={styles.likedPageContainer}>
      {/* Mostrar las imágenes liked en cuadrícula */}
      <ScrollView contentContainerStyle={styles.scrollViewLikedContainer}>
        <View style={styles.likedGridContainer}>
          {likedElements.map((element, index) => (
            <TouchableOpacity key={index} onPress={() => handleImageClick(index)}
            onPressIn={() => handleImagePressIn(index)}
            onPressOut={() => handleImagePressOut(index)}
            style={[
              styles.likedElementContainer,
              isPressed[index] && styles.pressedStyle, // Aplicar estilo al ser presionado
            ]}>
              <Image source={{ uri: element.imagen1 }} style={styles.likedElementImage} />
              {element.isFav ? (
                <View style={styles.likedPageFavoriteElement}>
                  <Image style={styles.likedPageFavoriteImage} source={require('./resources/pngs/favorito_si.png')} />
                </View>
              ) : null}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Modal para mostrar la imagen en grande */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <ScrollView>
            <View style={styles.logo_back_container}>
              <TouchableOpacity onPress={() => setModalVisible(false)}s>
                <Image style={styles.back} source={require('./resources/pngs/back.png')}/>
              </TouchableOpacity>
              <Image style={styles.logo} 
                source={require('./resources/pngs/logo.png')}
                />
            </View>
            {selectedImageIndex !== null && (
              <View style={styles.imageContainer}>
                <Image style={styles.image} 
                source={{ uri: likedElements[selectedImageIndex][propiedad1] }}
                />
                <View style={styles.overlayContainer}>
                  <Text style={styles.overlayTextRight}>{likedElements[selectedImageIndex].marca}</Text>
                  <Text style={styles.overlayTextLeft}>{likedElements[selectedImageIndex].precio}</Text>
                </View>
                <TouchableOpacity onPress={AbrirEnGoogle} style={styles.urlbutton}>
                  <Image style={styles.urlimage} source={require('./resources/pngs/link.png')}/>
                </TouchableOpacity>
                <View style={styles.smallImagesContainer}>
                  <TouchableOpacity onPress={handleImageOneClick} style={styles.touchableOpacityStyle}>
                    <Image style={styles.buttonImage} 
                      source={{ uri: likedElements[selectedImageIndex][propiedad2]}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleImageTwoClick} style={styles.touchableOpacityStyle}>
                    <Image style={styles.buttonImage} 
                      source={{ uri: likedElements[selectedImageIndex][propiedad3]}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleImageThreeClick} style={styles.touchableOpacityStyle}>
                    <Image style={styles.buttonImage} 
                      source={{ uri: likedElements[selectedImageIndex][propiedad4]}}/>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

interface PostponedPage {
  likedElements: any;
  favoriteElements: any;
  postponedElements: any;
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
  AbrirEnGooglePostponed: any;
  onPostponedFavorite: any;
}

const PostponedPage: React.FC<PostponedPage> = ({ postponedElements, onLike, onPostpone, onDislike, elementIndex, onImageOneClick, onImageTwoClick, onImageThreeClick, mainIndex, firstIndex, secondIndex, thirdIndex, AbrirEnGooglePostponed, onPostponedFavorite }) => {
  const [icon, setIcon] = useState(require('./resources/icons/fullpng.png'));
  const [tilted, setTilted] = useState('0deg');

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      if (gesture.dx > 30) {
        setIcon(require('./resources/icons/like.png'));
        setTilted('10deg');

      } else if (gesture.dx < -30) {
        setIcon(require('./resources/icons/dislike.png'));
        setTilted('-10deg');
      } else if (gesture.dy > 30) {
        setIcon(require('./resources/icons/reloj2.png'));
        setTilted('0deg');
      } else {
        setIcon(require('./resources/icons/fullpng.png'));
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
      setIcon(require('./resources/icons/fullpng.png'));
      setTilted('0deg');
    },
  });
  
  return (
  <View style={styles.swipeablePageContainer}>
    <View>
      <View {...panResponder.panHandlers}  style={[styles.swipeableContainer, styles.shadowProp, {transform: [{ rotate: tilted }]} ]}> 
        <View style={styles.inImageSwipeableContainer}> 
          <View style={styles.mainImageContainer}>
            <Image style={styles.mainImage} 
              source={{ uri: UrlGrabberPostponed({postponedElements, elementIndex})[mainIndex] }}
              />
            <View style={styles.inImageTextContainer}>
              <Text style={styles.inImageBrand}>{UrlGrabberPostponed({postponedElements, elementIndex})[5]}</Text>
              <Text style={styles.inImagePrice}>{UrlGrabberPostponed({postponedElements, elementIndex})[6]}</Text>
            </View>
            <View style={styles.inImageLikeContainer}>
              <Image source={icon} style={styles.inImageLike} />
            </View>
            <View style={styles.inImageButtonsContainer}>
              <TouchableOpacity onPress={AbrirEnGooglePostponed} style={styles.inImageUrlElement}>
                <Image style={styles.inImageUrlImage} source={require('./resources/pngs/link.png')}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPostponedFavorite} style={styles.inImageFavoriteElement}>
                <Image style={styles.inImageFavoriteImage} source={require('./resources/pngs/favorito_no.png')}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.underImagesContainer}>
              {/* Imágenes pequeñas */}
              <TouchableOpacity onPress={onImageOneClick}>
                <Image style={styles.underImages} 
                  source={{ uri: UrlGrabberPostponed({postponedElements, elementIndex})[firstIndex]}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={onImageTwoClick}>
                <Image style={styles.underImages} 
                  source={{ uri: UrlGrabberPostponed({postponedElements, elementIndex})[secondIndex]}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={onImageThreeClick}>
                <Image style={styles.underImages} 
                  source={{ uri: UrlGrabberPostponed({postponedElements, elementIndex})[thirdIndex]}}/>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    <View style={styles.swipersContainer}>
      {/* Botones para Likes, Postpone y Dislikes */}
      <TouchableOpacity  style={styles.swipersLeft} onPress={onDislike}>
        <Image  style={styles.swipersImage}
          source={require('./resources/pngs/thumbsdown.png')} // Ajusta la ruta de la imagen
        />
      </TouchableOpacity>

      <TouchableOpacity  style={styles.swipersMiddle} onPress={onPostpone}>
        <Image style={styles.swipersImage}
          source={require('./resources/pngs/reloj.png')} // Ajusta la ruta de la imagen
          />
        </TouchableOpacity>
      <TouchableOpacity  style={styles.swipersRight} onPress={onLike}>
      <Image style={styles.swipersImage}
          source={require('./resources/pngs/emptyheart.png')} // Ajusta la ruta de la imagen
        />
      </TouchableOpacity>
    </View>
  </View>
)};

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
    Linking.openURL(UrlGrabber({elementIndex})[4]);
  };

  const AbrirEnGooglePostponed = () => {
    let elementIndex = currentPostponedElementIndex
    Linking.openURL(UrlGrabberPostponed({postponedElements, elementIndex})[4]);
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
    console.log("like");
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

  return (
    <View style={styles.generalContainer}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <CustomTabBar {...props} />}
          screenOptions={{ swipeEnabled: false }}>
          <Tab.Screen name="Homescreen">
            {() => (
                <SwipeableImage
                  paquete={paquete}
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
            />}
          </Tab.Screen>
          <Tab.Screen name="Postponed">
            {() => (
              <PostponedPage
                postponedElements={postponedElements}
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
                AbrirEnGooglePostponed={AbrirEnGooglePostponed}
                onPostponedFavorite={HandlePostponedFavoriteAndSetFav}
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
    borderRadius: 10, 
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
    borderRadius: 10, 
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
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  mainImage: {
    width: '50%',
    height: '50%', 
    resizeMode: 'contain', 
    position: 'absolute',
    top: 10,
    right: 50,
  },
  miniImage: {
    width: '10%', 
    height: '10%', 
    resizeMode: 'contain',
    position: 'absolute',
    top: 10,
    right: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: '#dbccbb',
  },

  //SWIPEABLE CONTAINER
  swipeableContainerTrue: {
    marginTop: 30,
    backgroundColor: 'red',
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
    position: 'absolute',
    bottom: 50,
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
  }
});

export default HomeScreen;