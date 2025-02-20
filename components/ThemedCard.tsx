import {useThemeColor} from '@/hooks/useThemeColor';
import {Card, CardProps} from "react-native-paper";

export type ThemedCardProps = CardProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ThemedCard({style, lightColor, darkColor, ...otherProps}: ThemedCardProps) {
    const backgroundColor = useThemeColor({light: lightColor, dark: darkColor}, 'background');

    // @ts-ignore
    return <Card style={[{backgroundColor}, style]} {...otherProps} />;
}
