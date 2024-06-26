# rn-assignment5-11357610

Built screens and used `TabNavigator` in `App.js` to navigate between these screens, leveraging `ContextProvider` for a dark-theme option. Created a folder named `src` to include all files added to the initial Expo blank project.

## How the HomeScreen Was Built?

The `HomeScreen` component was created with a layout that includes a profile section, a card section, action buttons, and a transaction list. The `useTheme` hook from the `ThemeContext` was used to apply dark or light theme styles dynamically. The component also uses `Ionicons` for icons and maps through a list of transactions to display them.

Key Components:
- Profile section with user details and a search button.
- Card section displaying a user’s card.
- Action buttons for various actions like send, receive, loan, and top-up.
- Transaction list displaying recent transactions.

## How the SettingsScreen Was Built?

The `SettingsScreen` component includes a simple layout with a toggle switch to change the theme between dark and light modes. It uses the `useTheme` hook from the `ThemeContext` to get and toggle the theme.

Key Components:
- A toggle switch to change the theme.
- Text components styled according to the current theme.

## How the ThemeContext Was Built and Used in Relation to the Entirety of the App?

The `ThemeContext` was built using React’s `createContext`, `useState`, and `useContext` hooks. It provides the current theme state and a function to toggle the theme. The `ThemeProvider` component wraps the entire app to provide the theme context to all components.

Key Components:
- `ThemeContext` for managing theme state.
- `ThemeProvider` to wrap the app and provide the theme context.
- `useTheme` hook to access and use the theme context in components.

## How the TransactionData.js Was Built and Why?

The `TransactionData.js` file was created to store mock data for transactions. This data includes the transaction id, name, category, type (positive or negative), amount, and an icon source. It is used in the `HomeScreen` component to display a list of transactions with the help of a Flatlist and a map function.

Key Components:
- A list of transaction objects with relevant details.

## How the TabNavigator Was Built and Used?

The `TabNavigator` was built using the `createBottomTabNavigator` function from `@react-navigation/bottom-tabs`. It defines two tabs: `Home` and `Settings`, each linking to their respective components. The `useTheme` hook is used to style the tab navigator according to the current theme.

Key Components:
- `Tab.Navigator` to define the tab structure.
- `Tab.Screen` for each tab, linking to `HomeScreen` and `SettingsScreen`.
- Custom styling for active and inactive tab icons based on the current theme.

## Which Libraries/Dependencies Were Used?

- `react`: Core library for building the user interface.
- `react-native`: Provides components for building the native app.
- `react-navigation/native`: Navigation library for managing navigation in the app.
- `react-navigation/bottom-tabs`: Provides bottom tab navigation.
- `@expo/vector-icons`: Icon library used for adding icons to the app.
- `expo`: Framework for building React Native apps.
- `react-native-vector-icons`: Provides vector icons for React Native.

## Additional Details:

### How Was the Theme Achieved? (Continued)

The theme in the app was achieved by defining a `ThemeProvider` that wraps the entire application. This provider manages a `isDarkTheme` state which determines whether the app is in dark mode or light mode. Components throughout the app can access this theme state using the `useTheme` hook provided by the `ThemeContext`.

### Libraries/Dependencies Used:

- `react`: Core library for building the user interface.
- `react-native`: Provides components for building the native app.
- `react-navigation/native`: Navigation library for managing navigation in the app.
- `react-navigation/bottom-tabs`: Provides bottom tab navigation.
- `@expo/vector-icons`: Icon library used for adding icons to the app.
- `expo`: Framework for building React Native apps.
- `react-native-vector-icons`: Provides vector icons for React Native.

### How Were Screens Organized?

Screens were organized into separate components (`HomeScreen` and `SettingsScreen`) within the `src` folder. Each screen encapsulates its functionality and UI layout, utilizing navigation through the `TabNavigator` defined in `App.js`.

### Why Use ContextProvider for Dark Theme?

Using a `ContextProvider` for managing dark theme functionality ensures consistency across the entire application. It centralizes theme state management and provides a clear, predictable way to toggle between different themes without prop drilling or duplicating state management logic in multiple components.

### How Were Icons and Assets Managed?

Icons were managed using `@expo/vector-icons` for built-in icons like home and settings icons in the tab navigator. Custom icons for transaction types were sourced and imported into the `TransactionData.js` file. All assets were organized within the project's directory structure, ensuring they are easily accessible and properly referenced in components.

### Summary

This project leverages React Native and Expo to build a mobile app featuring tab-based navigation (`TabNavigator`) between `HomeScreen` and `SettingsScreen`. A `ThemeProvider` with a `ContextProvider` manages dark theme functionality throughout the app, enhancing user experience and visual appeal. Custom data management (`TransactionData.js`) and styling (`StyleSheet`) techniques ensure clarity and efficiency in developing and maintaining the application.

