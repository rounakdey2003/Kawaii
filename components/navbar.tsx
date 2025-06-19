"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  Divider,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Avatar,
  AvatarGroup,
  Badge,
  Select,
  SelectItem,
  Slider,
  Tabs,
  Tab,
  Autocomplete,
  AutocompleteItem,
  Link,
} from "@heroui/react";
import React from "react";
import { cn } from "@nextui-org/theme";

import {
  ChevronDown,
  Sun,
  Calender,
  Book,
  Love,
  Robot,
  Search,
  Down,
  Up,
} from "./icons";
import { Logo } from "./logo";
import { search, preset } from "./data";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const icons = {
    chevron: (
      <ChevronDown fill="currentColor" height={16} size={16} width={16} />
    ),
    phone: <Sun fill="currentColor" height={30} size={30} width={30} />,
    calender: <Calender fill="currentColor" height={30} size={30} width={30} />,
    book: <Book fill="currentColor" height={30} size={30} width={30} />,
    love: <Love fill="currentColor" height={30} size={30} width={30} />,
    robot: <Robot fill="currentColor" height={30} size={30} width={30} />,
    down: <Down fill="currentColor" height={30} size={30} width={30} />,
    up: <Up fill="currentColor" height={30} size={30} width={30} />,
    search: <Search fill="currentColor" height={30} size={30} width={30} />,
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300">
            Kawaii
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown backdrop="blur">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                color="warning"
                endContent={icons.chevron}
                radius="full"
                variant="shadow"
              >
                Categories
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="phone"
              color="primary"
              description="Today's Must-See Highlights and Unmissable Picks"
              startContent={icons.phone}
              variant="shadow"
            >
              Best Of Today
            </DropdownItem>
            <DropdownItem>
              <Divider />
            </DropdownItem>
            <DropdownItem
              key="calender"
              color="secondary"
              description="We got hot and curated collections that suits you mood"
              startContent={icons.calender}
              variant="shadow"
            >
              Hot Picks
            </DropdownItem>
            <DropdownItem>
              <Divider />
            </DropdownItem>
            <DropdownItem
              key="book"
              color="warning"
              description="Discover the trending and beloved essentials just for you"
              startContent={icons.book}
              variant="shadow"
            >
              My Feed
            </DropdownItem>
            <DropdownItem>
              <Divider />
            </DropdownItem>
            <DropdownItem
              key="love"
              color="success"
              description="See the top picks collected by the most famous Brands"
              startContent={icons.love}
              variant="shadow"
            >
              Most Favourite
            </DropdownItem>
            <DropdownItem>
              <Divider />
            </DropdownItem>
            <DropdownItem
              key="robot"
              color="danger"
              description="Transform ideas into stunning visuals with AI Discover"
              startContent={icons.robot}
              variant="shadow"
            >
              AI Discover
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Autocomplete
          classNames={{
            base: "max-w-xs",
            listboxWrapper: "max-h-[320px]",
            selectorButton: "text-default-500",
          }}
          color="success"
          defaultItems={search}
          inputProps={{
            classNames: {
              input: "ml-1",
              inputWrapper: "h-[48px]",
            },
          }}
          listboxProps={{
            hideSelectedIcon: true,
            itemClasses: {
              base: [
                "rounded-medium",
                "text-default-500",
                "transition-opacity",
                "data-[hover=true]:text-foreground",
                "dark:data-[hover=true]:bg-default-50",
                "data-[pressed=true]:opacity-70",
                "data-[hover=true]:bg-default-200",
                "data-[selectable=true]:focus:bg-default-100",
                "data-[focus-visible=true]:ring-default-500",
              ],
            },
          }}
          placeholder="#tags, @author, collections ..."
          popoverProps={{
            offset: 10,
            classNames: {
              base: "rounded-large",
              content: "p-1 border-small border-default-100 bg-background",
            },
          }}
          radius="full"
          startContent={<Search />}
          variant="bordered"
        >
          {(item) => (
            <AutocompleteItem
              key={item.id}
              textValue={item.name}
              variant="faded"
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Avatar
                    alt={item.name}
                    className="flex-shrink-0"
                    size="sm"
                    src={item.avatar}
                  />
                  <div className="flex flex-col">
                    <span className="text-small">{item.name}</span>
                    <span className="text-tiny text-default-400">
                      {item.team}
                    </span>
                  </div>
                </div>
                <Button
                  className="border-small mr-0.5 font-medium shadow-small"
                  radius="full"
                  size="sm"
                  variant="bordered"
                >
                  Add
                </Button>
              </div>
            </AutocompleteItem>
          )}
        </Autocomplete>
        <Dropdown backdrop="opaque">
          <DropdownTrigger>
            <Button color="warning" radius="full" variant="flat">
              Sort
            </Button>
          </DropdownTrigger>
          <DropdownMenu closeOnSelect={false} variant="flat">
            <DropdownItem key="edit">
              <Select
                className="max-w-xs"
                labelPlacement="outside"
                placeholder="Screen Presets"
                variant="faded"
              >
                {preset.map((item) => (
                  <SelectItem key={item.name}>{item.name}</SelectItem>
                ))}
              </Select>
            </DropdownItem>
            <DropdownItem>
              <Divider />
            </DropdownItem>
            <DropdownItem key="new">
              <Slider
                classNames={{
                  base: "max-w-sm gap-3",
                  filler:
                    "bg-gradient-to-r from-pink-300 to-cyan-300 dark:from-pink-600 dark:to-cyan-800",
                }}
                defaultValue={[100, 300]}
                label="Custom resolution"
                maxValue={1000}
                renderThumb={({ index, ...props }) => (
                  <div
                    {...props}
                    className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                  >
                    <span
                      className={cn(
                        "transition-transform bg-gradient-to-br shadow-small rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80",
                        index === 0
                          ? "from-pink-200 to-pink-500 dark:from-pink-400 dark:to-pink-600"
                          : "from-cyan-200 to-cyan-600 dark:from-cyan-600 dark:to-cyan-800",
                      )}
                    />
                  </div>
                )}
                showTooltip={true}
                size="lg"
                step={10}
              />
            </DropdownItem>
            <DropdownItem>
              <Divider />
            </DropdownItem>
            <DropdownItem key="copy">
              <Tabs
                className="flex-shrink-0"
                color="warning"
                variant="bordered"
              >
                <Tab
                  key="photos"
                  title={
                    <div className="flex items-center space-x-2">
                      {icons.up}
                      <span>High</span>
                    </div>
                  }
                />
                <Tab
                  key="music"
                  title={
                    <div className="flex items-center space-x-2">
                      <span>Relevant</span>
                    </div>
                  }
                />
                <Tab
                  key="videos"
                  title={
                    <div className="flex items-center space-x-2">
                      {icons.down}
                      <span>Low</span>
                    </div>
                  }
                />
              </Tabs>
            </DropdownItem>
            <DropdownItem>
              <Divider />
            </DropdownItem>
            <DropdownItem
              key="delete"
              className="text-red-500"
              color="danger"
              variant="flat"
            >
              Reset
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        <Dropdown backdrop="blur" placement="bottom-end">
          <DropdownTrigger>
            <AvatarGroup isBordered>
              <Avatar
                isBordered
                color="warning"
                src="https://i.pinimg.com/736x/fe/b1/e1/feb1e1ced7f73f5e76df629380c2f60c.jpg"
              />
            </AvatarGroup>
          </DropdownTrigger>
          <DropdownMenu variant="flat">
            <DropdownItem key="profile" className="h-10 gap-2" color="success">
              <Link href="/about" className="font-bold text-green-500">Account</Link>
            </DropdownItem>
            <DropdownItem>
              <Divider />
            </DropdownItem>
            <DropdownItem key="profile" className="h-10" color="warning">
              <div className="flex items-center gap-14">
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300">
                  Kawaii Coin
                </p>
                <Badge color="warning" content="+65" shape="circle" />
              </div>
            </DropdownItem>
            <DropdownItem>
              <Divider />
            </DropdownItem>
            <DropdownItem key="team_settings">My Collection</DropdownItem>
            <DropdownItem key="help_and_feedback">Following</DropdownItem>
            <DropdownItem key="help_and_feedback">Statistics</DropdownItem>
            <DropdownItem>
              <Divider />
            </DropdownItem>
            <DropdownItem key="team_settings">Settings</DropdownItem>
            <DropdownItem key="help_and_feedback">Help</DropdownItem>
            <DropdownItem key="help_and_feedback">Legals</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu>
        <NavbarItem>
          <Dropdown backdrop="blur">
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                  color="warning"
                  endContent={icons.chevron}
                  radius="full"
                  variant="shadow"
                >
                  Categories
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="phone"
                color="primary"
                description="Today's Must-See Highlights and Unmissable Picks"
                startContent={icons.phone}
                variant="shadow"
              >
                Best Of Today
              </DropdownItem>
              <DropdownItem>
                <Divider />
              </DropdownItem>
              <DropdownItem
                key="calender"
                color="secondary"
                description="Discover hot and curated collections from our picks"
                startContent={icons.calender}
                variant="shadow"
              >
                Hot Picks
              </DropdownItem>
              <DropdownItem>
                <Divider />
              </DropdownItem>
              <DropdownItem
                key="love"
                color="success"
                description="Discover the top picks everyone loves and can't resist"
                startContent={icons.love}
                variant="shadow"
              >
                Most Favourite
              </DropdownItem>
              <DropdownItem>
                <Divider />
              </DropdownItem>
              <DropdownItem
                key="robot"
                color="danger"
                description="Transform ideas into stunning visuals with AI Discover"
                startContent={icons.robot}
                variant="shadow"
              >
                AI Discover
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Divider className="mb-5 mt-2" />
        </NavbarItem>
        <NavbarItem>
          <Autocomplete
            classNames={{
              base: "max-w-xs",
              listboxWrapper: "max-h-[320px]",
              selectorButton: "text-default-500",
            }}
            color="success"
            defaultItems={search}
            inputProps={{
              classNames: {
                input: "ml-1",
                inputWrapper: "h-[48px]",
              },
            }}
            listboxProps={{
              hideSelectedIcon: true,
              itemClasses: {
                base: [
                  "rounded-medium",
                  "text-default-500",
                  "transition-opacity",
                  "data-[hover=true]:text-foreground",
                  "dark:data-[hover=true]:bg-default-50",
                  "data-[pressed=true]:opacity-70",
                  "data-[hover=true]:bg-default-200",
                  "data-[selectable=true]:focus:bg-default-100",
                  "data-[focus-visible=true]:ring-default-500",
                ],
              },
            }}
            placeholder="#tags, @author, collections ..."
            popoverProps={{
              offset: 10,
              classNames: {
                base: "rounded-large",
                content: "p-1 border-small border-default-100 bg-background",
              },
            }}
            radius="full"
            startContent={<Search />}
            variant="bordered"
          >
            {(item) => (
              <AutocompleteItem
                key={item.id}
                textValue={item.name}
                variant="faded"
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <Avatar
                      alt={item.name}
                      className="flex-shrink-0"
                      size="sm"
                      src={item.avatar}
                    />
                    <div className="flex flex-col">
                      <span className="text-small">{item.name}</span>
                      <span className="text-tiny text-default-400">
                        {item.team}
                      </span>
                    </div>
                  </div>
                  <Button
                    className="border-small mr-0.5 font-medium shadow-small"
                    radius="full"
                    size="sm"
                    variant="bordered"
                  >
                    Add
                  </Button>
                </div>
              </AutocompleteItem>
            )}
          </Autocomplete>
        </NavbarItem>
        <NavbarItem>
          <Dropdown backdrop="opaque">
            <DropdownTrigger>
              <Button color="warning" radius="full" variant="flat">
                Sort
              </Button>
            </DropdownTrigger>
            <DropdownMenu closeOnSelect={false} variant="shadow">
              <DropdownItem key="edit">
                <Select
                  className="max-w-xs"
                  labelPlacement="outside"
                  placeholder="Screen Presets"
                  variant="faded"
                >
                  {preset.map((item) => (
                    <SelectItem key={item.name}>{item.name}</SelectItem>
                  ))}
                </Select>
              </DropdownItem>
              <DropdownItem>
                <Divider />
              </DropdownItem>
              <DropdownItem key="new">
                <Slider
                  classNames={{
                    base: "max-w-sm gap-3",
                    filler:
                      "bg-gradient-to-r from-pink-300 to-cyan-300 dark:from-pink-600 dark:to-cyan-800",
                  }}
                  defaultValue={[100, 300]}
                  label="Custom resolution"
                  maxValue={1000}
                  renderThumb={({ index, ...props }) => (
                    <div
                      {...props}
                      className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                    >
                      <span
                        className={cn(
                          "transition-transform bg-gradient-to-br shadow-small rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80",
                          index === 0
                            ? "from-pink-200 to-pink-500 dark:from-pink-400 dark:to-pink-600"
                            : "from-cyan-200 to-cyan-600 dark:from-cyan-600 dark:to-cyan-800",
                        )}
                      />
                    </div>
                  )}
                  showTooltip={true}
                  size="lg"
                  step={10}
                />
              </DropdownItem>
              <DropdownItem>
                <Divider />
              </DropdownItem>
              <DropdownItem key="copy">
                <Tabs
                  className="flex-shrink-0"
                  color="warning"
                  variant="bordered"
                >
                  <Tab
                    key="photos"
                    title={
                      <div className="flex items-center space-x-2">
                        {icons.up}
                        <span>High</span>
                      </div>
                    }
                  />
                  <Tab
                    key="music"
                    title={
                      <div className="flex items-center space-x-2">
                        <span>Relevant</span>
                      </div>
                    }
                  />
                  <Tab
                    key="videos"
                    title={
                      <div className="flex items-center space-x-2">
                        {icons.down}
                        <span>Low</span>
                      </div>
                    }
                  />
                </Tabs>
              </DropdownItem>
              <DropdownItem>
                <Divider />
              </DropdownItem>
              <DropdownItem
                key="delete"
                className="text-red-500"
                color="danger"
                variant="flat"
              >
                Reset
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
