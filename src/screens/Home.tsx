import React,{Component} from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,TouchableOpacity,
    Text,FlatList,
    StatusBar,ActivityIndicator} from "react-native";
import {connect} from "react-redux";
import {fetchPosts,getUserAsync} from "../actions";
import {Actions} from "react-native-router-flux";
import {addTodo} from "../actions/TodoActions";

class Home extends Component{

    componentDidMount() {
        this.props.handleAPIRequest();
        //this.props.handleBreweryAPI();
      }
      renderItem(data) {
        return <TouchableOpacity style={{backgroundColor: '#B3D8F4',height:30, paddingLeft:10}} onPress={() =>{Actions.about({selectedId:data.item.id})}}>
                    <View  style={styles.listItemContainer}>
                        <Text style={styles.breweryItemHeader}>{data.item.title}</Text>
                    </View>
                </TouchableOpacity>
    }

    render(){
        const { posts, loading } = this.props;
        console.log(posts);
        if(!loading) {
            return (

                <SafeAreaView>
<FlatList 
                    data={posts}
                    renderItem={this.renderItem}
                  //  keyExtractor={(item) => item.id} 
                    keyExtractor = { (item, index) => index.toString() }
                    />
                </SafeAreaView>
            )
        } else {
            return <ActivityIndicator />
        }
    }
}

const styles = StyleSheet.create({

})
const mapStateToProps = state =>({
    posts:state.app.items

});
const mapDispatchToProps = dispatch=>({
    handleAPIRequest : ()=> dispatch(fetchPosts()),
    handleBreweryAPI :()=>dispatch(getUserAsync()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);