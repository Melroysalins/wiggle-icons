# wiggle-icons

A collection of animated React SVG icons with hover effects built with TypeScript.

## Installation

```bash
npm install wiggle-icons
# or
yarn add wiggle-icons
```

## Usage

```tsx
import { PhoneXMarkIcon, ArrowTrendingDownIcon } from 'wiggle-icons';

export default function App() {
  return (
    <div>
      <PhoneXMarkIcon size={24} color="#1e293b" />
      <ArrowTrendingDownIcon size={24} color="#1e293b" />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width and height of the icon |
| `color` | `string` | `currentColor` | Stroke color of the icon |
| `badge` | `number` | `0` | Badge count to display |
| `badgeColor` | `string` | `grey` | Background color of the badge |
| `badgeFont` | `string` | `14px` | Font size of the badge text |
| `badgeFontColor` | `string` | `black` | Font color of the badge text |

Since all icons extend `React.SVGProps<SVGSVGElement>`, you can also pass any
standard SVG prop like `className`, `id`, `onClick`, `style` etc:

```tsx
<PhoneXMarkIcon
  size={32}
  color="red"
  className="my-icon"
  onClick={() => console.log('clicked!')}
  style={{ marginRight: '8px' }}
/>
```

## Available Icons

| Icon | Import |
|------|--------|
| Home | `HomeIcon` |
| Shopping Bag | `ShoppingBag` |
| Scissor | `ScissorIcon` |
| Shopping Cart | `ShoppingCartIcon` |
| Speaker | `SpeakerIcon` |
| Arrow Right Left | `ArrowRightLeftIcon` |
| At Sign | `AtSignIcon` |
| Refresh | `RefreshIcon` |
| Arrow Pointing In | `ArrowPointingInIcon` |
| Arrow Pointing Out | `ArrowPointingOutIcon` |
| Chart | `ChartIcon` |
| Bug Ant | `BugAntIcon` |
| Chat Bubble | `ChatBubbleLeftEllipsisIcon` |
| Chevron Double Left | `ChevronDoubleLeftIcon` |
| Cursor Arrow Rays | `CursorArrowRaysIcon` |
| Face Frown | `FaceFrownIcon` |
| Face Smile | `FaceSmileIcon` |
| Lock Open | `LockOpenIcon` |
| Paper Plane | `PaperPlaneIcon` |
| Rocket Launch | `RocketLaunchIcon` |
| Truck | `TruckIcon` |
| Phone X Mark | `PhoneXMarkIcon` |
| Arrow Trending Down | `ArrowTrendingDownIcon` |
| Adjustments Vertical | `AdjustmentsVerticalIcon` |
| Archive Box X Mark | `ArchiveBoxXMarkIcon` |
| Arrow Turn Left Down | `ArrowTurnLeftDownIcon` |

## License

MIT