import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/Feather'

const MainPage = () => {
  const [mode, setMode] = useState(true);
  const change = () => setMode(!mode);
  return (
    <View style={mode? Styles.fullContainer: dark.fullContainer}>
        <View style= {Styles.container}>
            <Text style={mode? Styles.header:dark.header}>WELCOME B-BUGGER!</Text>
            <View style={Styles.mt30}>
                <Text style={mode? Styles.menuTitle:dark.menuTitle}>최고 인기메뉴</Text>
            </View>

            {/* 최고인기메뉴 박스 */}
            <View style={Styles.firstBox}>
                <View style={Styles.burboxHead}>
                    <View style={Styles.burIconBox}>
                        <Image source={require('../img/burgericon.png')} style={Styles.burgerIcon}/>
                    </View>
                    <View style={Styles.burgerText}>
                        <Text style={Styles.burgerTextBg}>Burger</Text>
                        <Text style={Styles.burgerTextJf}>Junk Food</Text>
                    </View>
                    <View style={Styles.favoriteBox}>
                        <Icon name="hearto" size={22} color="#fff" />
                    </View>
                </View>
                <View style={Styles.burboxContents}>
                    <View style={Styles.burgerLeft}>
                        <Text style={Styles.cheesebur}>Pimento Burger & Cheddar Cheese</Text>
                        <TouchableHighlight>
                            <View style={Styles.priceBtn}>
                                <Text style={Styles.smallPrice} >Price</Text>
                                <Text style={Styles.bigPrice}>5,000원</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={Styles.burgerPic}>
                        <Image source={require('../img/burger.png')} style={{width:120, height:120}} /> 
                    </View>
                </View>
            </View>

            <View style={Styles.mt30}>
                <Text style={mode? Styles.menuTitle:dark.menuTitle}>금주의 메뉴</Text>
            </View>
            {/* 금주의 메뉴 박스 */}
            <View style={Styles.secondBox}>
                <View style={Styles.orangeBox}>
                    <View style={Styles.frenchtext}>
                        <Text style={Styles.frenchfries}>French fries</Text>
                        <Text style={Styles.frenchContent}>금주의 메뉴는 엄청나게 엄청난 프렌치 프라이 입니다.</Text>
                        <View style={Styles.star}>
                            <Icon name='star' size={18} color="#fff"></Icon>
                            <Text style={Styles.grade}>4.9</Text>
                        </View>
                    </View>
                    <View style={Styles.frenchPic}>
                        <Image source={require('../img/frenchfries.png')} style={{width:89, height:100}} />
                    </View>
                </View>
                <View style={Styles.secondRightbox}>
                    <View style={Styles.secondMini}></View>
                    <View style={Styles.secondMini}></View>
                </View>
            </View>

            <View>
                <Pressable style={Styles.moonbtn} onPress={change}>
                    <Icon1 name={mode?'moon':'sun'} size={30} color={mode?'#eee':'orange'}></Icon1>
                </Pressable>
            </View>
        </View>
    </View>
  )
}
const dark = StyleSheet.create({
    fullContainer:{
        backgroundColor:'black'
    },
    header:{
        fontSize: 25,
        fontWeight: 'bold',
        color:'white'
    },
    menuTitle:{
        fontSize: 20,
        fontWeight: '700',
        color: 'white'
    }
})

const Styles = StyleSheet.create({
    fullContainer:{
        backgroundColor:'#fff'
    },
    container:{
        marginTop: 50,
        marginLeft: 20,
        marginRight: 30,
        marginBottom:50
    },
    header:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    menuTitle:{
        fontSize: 20,
        fontWeight: '700'
    },
    mt30:{
        marginTop: 30
    },
    firstBox:{
        width: 370,
        height: 230,
        backgroundColor:'#144c59',
        borderRadius: 10,
        marginTop: 10
    },
    burboxHead:{
        // backgroundColor:'#eee',
        height: 40,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        display: 'flex',
        flexDirection:'row'
    },
    burIconBox:{
        width: 40,
        height:40,
        backgroundColor: '#2c5d8b',
        borderRadius:10,
        alignItems:'center',
        justifyContent: 'center',
    },
    burgerIcon:{
        width:30,
        height:30,
    },
    burgerText:{
        marginLeft: 12,
        paddingBottom: 2
    },
    burgerTextBg:{
        color: '#fff',
        fontWeight: '600',
        fontSize: 17
    },
    burgerTextJf:{
        color: '#fff',
        fontWeight: '300'
    },
    favoriteBox:{
        width: 40,
        height:40,
        backgroundColor: '#2c5d8b',
        borderRadius:50,
        alignItems:'center',
        justifyContent: 'center',
        marginLeft:'auto'
    },
    burboxContents:{
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
        marginLeft: 20,
        marginRight: 20
    },
    burgerLeft:{
        flex:1.8,
    },
    cheesebur:{
        color: 'white',
        fontSize:20,
        fontWeight:'500'
    },
    priceBtn:{
        marginTop:15,
        backgroundColor:'#fff',
        width: 180,
        height: 40,
        borderRadius:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    smallPrice:{
        flex:1,
        fontSize: 15,
        fontWeight: '500',
        textAlign:'center'
    },
    bigPrice:{
        flex:1,
        fontSize: 20,
        fontWeight:'600'
    },
    burgerPic:{
        flex:1,
    },
    secondBox:{
        width: 370,
        height: 250,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    orangeBox:{
        backgroundColor:'#f08040',
        width: 170,
        height: 250,
        borderRadius: 10
    },
    frenchtext:{
        height: 100,
        marginTop:20,
        marginRight:15,
        marginLeft:15,
    },
    frenchfries:{
        color: '#fff',
        fontSize:20,
        marginBottom: 5
    },
    frenchContent:{
        color:'#fff',
        fontSize: 15,
        marginBottom: 5
    },
    frenchPic:{
        marginTop:28,
        alignItems:'center',
    },
    star:{
        display:'flex',
        flexDirection:'row'
    },
    grade:{
        color: '#fff',
        marginLeft: 5,
        fontWeight: '400'
    },
    secondRightbox:{
        width: 180,
        height: 230,
        marginLeft: 'auto',
        display:'flex',
        flexDirection:'column'
    },
    secondMini:{
        width: 180,
        height: 115,
        backgroundColor: '#e3e3f1',
        marginBottom: 20,
        borderRadius:10
    },
    moonbtn:{
        width: 50,
        height: 50,
        marginLeft: 'auto',
        marginTop:30,
        backgroundColor: '#333',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25
    }
})
export default MainPage