export type IconProps = {

    size ?: number;

    color?: string
    
    badge?: number
    
    badgeColor?: string
    
    badgeFont?: string
    
    badgeFontColor ?: string
    
}& React.SVGProps<SVGSVGElement>;     // it is used to basically tell to combine the custom prop which i have given in the iconprops , with inbuilt svg props like classname , id , onClick , ect