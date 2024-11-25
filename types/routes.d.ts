type Route =
	| '/view'
	| '/text'
	| '/image'
	| '/image-background'
	| '/text-input'
	| '/button'
	| '/pressable'
	| '/switch'
	| '/activity-indicator'
	| '/modal'
	| '/alert'
	| '/action-sheet-i-o-s'
	| '/scroll-view'
	| '/keyboard-avoiding-view';

type ItemRoute = {
	href: Route;
	text: string;
};
