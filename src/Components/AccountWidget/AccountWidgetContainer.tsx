import { useAppSelector } from "../../hooks"
import { UserLogged } from "../../interfaces";
import AccountWidgetPlaceholder from "./AccountWidgetPlaceholder";
import AccountWidgetView from "./AccountWidgetView";

const AccountWidgetContainer = () => {
  const user: UserLogged = useAppSelector(state => state.user.data);

  return user?.username ? <AccountWidgetView user={user} /> : <AccountWidgetPlaceholder />
}

export default AccountWidgetContainer
