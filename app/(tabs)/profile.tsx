import {StyleSheet} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {Avatar, Button, Card, PaperProvider} from 'react-native-paper';
import {ThemedCard} from "@/components/ThemedCard";
import React, {useContext} from "react";
import AuthContext from "@/context/AuthContext";
import {IconSymbol} from "@/components/ui/IconSymbol";
import {useThemeColor} from "@/hooks/useThemeColor";

export default function ProfileTab() {
    const {user, logout}: any = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    return (
        <ParallaxScrollView>
            <ThemedCard style={styles.userCard}>
                <Avatar.Image
                    style={styles.image}
                    size={200}
                    source={{uri: 'https://static.wikia.nocookie.net/rickandmorty/images/3/30/Glootie.png/revision/latest/thumbnail/width/360/height/360?cb=20190720005839'}}
                />
                <ThemedText style={styles.name} type={'title'}>{user?.firstName} {user?.lastName}</ThemedText>
            </ThemedCard>
            <ThemedCard style={styles.buttonCard}>
                <Card.Content style={styles.buttonCardContent}>
                    <IconSymbol
                        color={useThemeColor({}, 'icon')}
                        name="gearshape.fill"
                    />
                    <ThemedText
                        style={{color: useThemeColor({}, 'icon')}}
                        type={'defaultSemiBold'}>
                        Settings
                    </ThemedText>
                    <IconSymbol
                        color={useThemeColor({}, 'icon')}
                        name="arrow.right"
                    />
                </Card.Content>
            </ThemedCard>
            <ThemedCard style={styles.buttonCard}>
                <Card.Content style={styles.buttonCardContent}>
                    <IconSymbol
                        color={useThemeColor({}, 'icon')}
                        name='person.3.fill'
                    />
                    <ThemedText
                        style={{color: useThemeColor({}, 'icon')}}
                        type={'defaultSemiBold'}>
                        Teams
                    </ThemedText>
                    <IconSymbol
                        color={useThemeColor({}, 'icon')}
                        name="arrow.right"
                    />
                </Card.Content>
            </ThemedCard>
            <PaperProvider settings={{rippleEffectEnabled: false}}>
                <Button mode='text' textColor={useThemeColor({}, 'close')} onPress={handleLogout}>Log out</Button>
            </PaperProvider>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    userCard: {
        width: '100%',
        height: 450,
        flex: 1,
        alignItems: 'center',
        display: "flex"
    },
    buttonCard: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
    },
    buttonCardContent: {
        marginHorizontal: 10,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between'
    },
    image: {
        marginTop: 50,
        marginBottom: 20,
    },
    name: {
        textAlign: 'center',
    }
});
