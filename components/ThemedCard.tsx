import {useThemeColor} from '@/hooks/useThemeColor';
import {Card} from "react-native-paper";

export function ThemedCard({style, ...otherProps}: any) {
    const backgroundColor = useThemeColor({}, 'card');

    // @ts-ignore
    return <Card style={[{backgroundColor}, style]} {...otherProps} />;
}
