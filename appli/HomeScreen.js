import React, { Component } from 'react';
import { Text,Button,RefreshControl,AsyncStorage,BackHandler,ToastAndroid,ActivityIndicator, ScrollView,View,TouchableOpacity,FlatList,Dimensions,StyleSheet,TextInput,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar,Header,Card} from 'react-native-elements';
import {NavigationEvents} from 'react-navigation';






export default class Add extends Component {

   constructor(props) {
    super(props);
    this.state = {
   isLoading: true,
   count:0,
   add:false,
 
   
  };
  }  



 
 componentDidMount() {

  

return fetch('https://randomuser.me/api/?results=10&seed=eumentis')
     .then((response) => response.json())
     .then((responseJson) => {
     
       this.setState({
         isLoading: false,
         dataSource:responseJson.results,
       }, function() {
         // In this block you can do something with new state.
       });

       
     }

     )
     .catch((error) => {
       //console.error(error);
     });



 }



IncrementCount = () => {

          
    this.setState( { count:this.state.count + 1,isadd:true,isLoading:false,
      
     });
    //alert(this.state.count)
    

   }
  DecrementCount = () => {

       if(this.state.count>0)
       {   
    this.setState(prevState => ({ count: this.state.count - 1,isadd:true,isLoading:false, }));
  }
    //alert(this.state.count)

   }

 

  render() {

   if(this.state.isLoading){

      return( <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#9EC1FF" />
      </View>)
    }
    
    else
    {
      ToastAndroid.show('Users download complete!', ToastAndroid.SHORT);
      
    return (
       <View style={styles.MainContainer}>
 

      

<FlatList
data={this.state.dataSource }
extraData={this.state}
keyExtractor={item => item.email}
renderItem={({item}) =>
 
<Card
 
  > 
<View style={styles.Header}>

  <View style={styles.Avatar}>
  <Avatar 
borderWidth={5}
borderColor="white"
size="large"
  rounded
source={{
    uri:
      item.picture.large
  }}
/>
</View>
</View>

<View style={{flexDirection:'row',marginTop:height*0.05,justifyContent:'center',alignItem:'center'}}>
<Text style={styles.firstname}>{item.name.first}</Text>
<Text style={styles.lastname}>{item.name.last}</Text>
</View>
  
<View style={styles.envelopeContain}>
<Icon style={styles.envelope}
 name="envelope" size={20} color="#666666"/>
<Text style={styles.val}>{item.email}</Text>
</View>

<View style={styles.icon}>
<Icon  style={styles.iconstyle}
 name="phone" size={20} color="#666666"/>
<Text style={styles.value} >{item.cell}</Text>
</View>



<View style={styles.icon} >
<Icon  style={styles.iconstyle}
 name="birthday-cake" size={20} color="#666666"/>
<Text style={styles.value}>{item.dob.date}</Text>
</View>

<View
  style={styles.divider}
/>

<View  style={styles.Addmember}>
<TouchableOpacity style={styles.upthumb}  onPress={this.IncrementCount}>
<Icon  
 name="thumbs-up" size={40} color="#1869FF"/>
</TouchableOpacity>

<View style={styles.Votes}>
{this.state.isadd ?<Text style={styles.VotesCount}>{this.state.count}</Text> :<Text style={styles.VotesCount}>{this.state.count}</Text>}
<Text style={styles.Votetext} >Votes</Text>
</View>

<TouchableOpacity style={styles.downthumb}  onPress={this.DecrementCount} >
 <Icon  
 name="thumbs-down" size={40} color="#1869FF"/>
</TouchableOpacity>

</View>  
</Card>

  

         }

       
       />
 
 

      </View>
    );

  
  }
}

}




 const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
 MainContainer :{
 
flex:1,
backgroundColor:'#F3F2F8'

},

Header:
{
backgroundColor:'#9EC1FF',
width:300,
height:80,
flex:1},
Avatar:
{
marginLeft:width*0.05,
  justifyContent:'center',
  alignItems:'center',
marginTop:height*0.08,

},
firstname:
{
  marginLeft:width*0.05,
color:'#000000',
fontSize:height*0.04,
textTransform:'capitalize'

},
lastname:
{
  marginLeft:width*0.01,
  color:'#000000',
  fontSize:height*0.04,
  textTransform:'capitalize'
},
envelopeContain:
{
  flexDirection:'row',
marginTop:height*0.05
},
envelope:
{
marginTop:height*0.03,
marginLeft:width*0.0002
},
icon:
{
flexDirection:'row',
marginTop:height*0.05
},
iconstyle:
{
marginTop:height*0.01,
marginLeft:width*0.002
},
val:
{ 
  marginLeft:width*0.03,
  color:'#666666',
  fontSize:height*0.025,
  marginTop:height*0.03,
  fontWeight:"bold"

},
value:
{
  marginLeft:width*0.03,
  color:'#666666',
  fontSize:height*0.025,
  marginTop:height*0.01,
  fontWeight:"bold"
},
Addmember:
{
  flexDirection:'row',
  marginTop:height*0.06,

},
divider:
{
    borderBottomColor: '#999999',
    borderBottomWidth: 0.5,
    marginTop:height*0.05
  },
upthumb:{
 // marginRight:width*0.3
  marginLeft:width*0.06
},
Votetext:
{
  marginLeft:width*0.23,
color:'#999999'
},
VotesCount:
{
  marginLeft:width*0.25,
  color:"#1869FF",
  fontSize:height*0.05
},
downthumb:{
  marginLeft:width*0.20
},

});