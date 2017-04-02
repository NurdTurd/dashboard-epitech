/**
 * Created by jules on 22/02/17.
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    headerContainerAndroid: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#233445',
        alignItems: 'center',
        elevation: 3,
    },

    headerContainerIOS: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#233445',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 1.5,
        shadowOpacity: 0.5,
    },

    headerIcon: {
        marginLeft: 15,
        marginRight: 10,
        color: '#FAFAFA',
    },

    headerText: {
        fontSize: 14,
        color: '#FAFAFA',
    },

    documentText: {
        alignSelf: 'center',
        color: '#FAFAFA',
        fontSize: 12,
        margin: 5,
    },

    documentIcon: {
        marginTop: 5,
        alignSelf: 'center',
        color: '#FAFAFA',
    },

    documentSubContainer: {
        marginTop: 0,
        margin: 10,
        width: 100,
        elevation: 3,
        backgroundColor: '#233445'
    },

    documentContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flex: 1,
        margin: 10,
    },

    teamMemberImage: {
        borderRadius: 3,
        margin: 5,
    },

    teamImageContainer: {
        flex: 0.94,
    },

    teamContainer: {
        margin: 10,
        marginBottom: 3,
        backgroundColor: '#233445',
        elevation: 1
    },

    teamSubContainer: {
        marginTop: 3,
        flexDirection: 'row',
        flex: 1
    },

    detailsText: {
        fontWeight: "bold",
        fontSize: 12,
        color: "#FAFAFA",
    },

    detailsSubContainer: {
        flexDirection: 'row',
        marginLeft: 8,
        marginTop: 12,
    },

    detailsContainerAndroid: {
        backgroundColor: "#233445",
        elevation: 10,
        paddingBottom: 15,
    },

    detailsContainerIOS: {
        backgroundColor: "#233445",
        zIndex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        shadowOpacity: 0.5,
        paddingBottom: 15,
    },

    descriptionDetailsText: {
        color: "#FAFAFA",
        fontSize: 12,
        marginLeft: 10,
        marginTop: 5,
    },

    bannerDetailsText: {
        fontWeight: "bold",
        color: "#FFF",
        fontSize: 12,
        alignSelf: 'center'
    },

    bannerDetailsIcon: {
        color: "#FAFAFA",
    },

    headerDetailsText: {
        color: "#FAFAFA",
        flex: 0.6,
    },

    headerDetailsIcon: {
        color: "#FAFAFA",
        fontSize: 24,
        flex: 0.1,
    },

    headerDetailsSubContainer: {
        flex: 0.05,
    },

    headerDetailsContainerAndroid: {
        margin: 10,
        marginBottom: 0,
        elevation: 4,
        height: 70,
        backgroundColor: "#233445",
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#16212C',
        alignItems: 'center',
    },

    headerDetailsContainerIOS: {
        margin: 10,
        marginBottom: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 1,
        shadowOpacity: 0.5,
        height: 70,
        backgroundColor: "#233445",
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#16212C',
        alignItems: 'center',
    },

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#233445',
    },

    loadingText: {
        fontSize: 14,
        color: "#FAFAFA",
        margin: 15,
    },
});

export default styles;