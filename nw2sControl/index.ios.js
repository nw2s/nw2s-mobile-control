/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Image = React.Image;

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var nw2sControl = React.createClass({
  render: function() {
    return (
	<Image source={ require("./resources/images/background-dark1.jpg") } style={styles.container}>
		<View style={styles.titleScreen}>
	        <Text style={styles.welcomelogo}>nw2s
	        </Text>
	        <Text style={styles.instructions}>
	          Scanning for devices...
	        </Text>
	        <Text style={styles.subinstructions}>
			Ensure your nw2s::b, nw2s::b2, or nw2s::dsp is running.
	        </Text>
			<View style={styles.deviceList}>
				<View style={styles.deviceListItem}>
					<Image source={require("./resources/images/icon-b.jpg")} style={styles.deviceListImage} />
					<Text style={styles.deviceListItemName}>CV Brain 1</Text>
				</View>
				<View style={styles.deviceListItem}>
					<Image source={require("./resources/images/icon-b.jpg")} style={styles.deviceListImage} />
					<Text style={styles.deviceListItemName}>Looper Box</Text>
				</View>
			</View>
		</View>
      </Image>
    );
  }
});

var styles = StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		width: null,
		backgroundColor: '#000000',
    },
	
 	titleScreen: {
		backgroundColor: 'rgba(0,0,0,0)',
 	},
	
	deviceList: {
		marginTop: 25,	
	},
	
	deviceListItem: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	
	deviceListImage: {
		width: 50,
		height: 33,
		resizeMode: 'contain',
		borderRadius: 2,		
	},
	
	deviceListItemName: {
		color: "#999999",
		marginLeft: 10,
		fontFamily: 'Montserrat',
		fontWeight: '400',
		fontSize: 20,
		textAlign: 'left',
		color: '#999999',		
	},
	
	welcomelogo: {	  
		fontFamily: 'Montserrat',
		fontSize: 60,
		fontWeight: '700',
		textAlign: 'left',
		color: '#999999',
		marginBottom: 10,
  	},
  	
	instructions: {
		fontFamily: 'Montserrat',
		fontWeight: '400',
		fontSize: 20,
		textAlign: 'left',
		color: '#999999',
		marginBottom: 5,
  	},
  
	subinstructions: {
		fontFamily: 'Montserrat',
		fontWeight: '400',
		fontSize: 10,
		textAlign: 'left',
		color: '#AAAAAA',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('nw2sControl', () => nw2sControl);
