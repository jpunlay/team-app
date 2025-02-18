// import React from 'react';
// import {Alert} from 'react-native';
// import auth from '@react-native-firebase/auth';
// import appleAuth, {
//     AppleRequestScope,
//     AppleRequestOperation,
// } from '@invertase/react-native-apple-authentication';
// import {Button} from "react-native-paper";
//
// const handleSignInWithApple = async () => {
//     try {
//         let AppleAuthRequestScope;
//         const appleAuthRequestResponse = await appleAuth.performRequest({
//             requestedOperation: AppleRequestOperation.LOGIN,
//             requestedScopes: [AppleRequestScope.EMAIL, AppleRequestScope.FULL_NAME],
//         });
//
//         const {identityToken, nonce} = appleAuthRequestResponse;
//
//         if (identityToken) {
//             const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);
//             await auth().signInWithCredential(appleCredential);
//         }
//     } catch (error: any) {
//         if (error.code === 'ERR_CANCELED') {
//             // User cancelled the sign-in flow
//             Alert.alert('Sign in with Apple cancelled.');
//         } else {
//             // Handle other errors
//             Alert.alert('Sign in with Apple failed.', error.message);
//         }
//     }
// };
//
// const AppleLoginButton = () => {
//     return (
//         <Button
//             icon="apple"
//                 mode="contained-tonal"
//                 onPress={handleSignInWithApple}
//             >
//             "Press bruh
//         </Button>
//     );
// };
//
// export default AppleLoginButton;
