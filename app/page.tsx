"use client";
import {
  Card,
  CardFooter,
  Image,
  Button,
  Divider,
  CardBody,
  ScrollShadow,
  Accordion,
  AccordionItem,
  Code,
  Link,
} from "@nextui-org/react";
import React from "react";

import { Download, Heart, Right, Left, Reload } from "@/components/icons";
import { today, hot, feed, ai } from "@/components/data";

export default function Home() {
  const [liked, setLiked] = React.useState(false);
  const [reload, setReload] = React.useState(false);

  return (
    <div className="w-full h-full">
      <div className="gap-3 grid grid-cols-3 sm:gap-7 mt-10">
        <div className="col-span-1">
          <p className="font-bold text-5xl pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 mr-auto">
            Best Of
          </p>
          <p className="font-bold text-4xl pb-2 text-teal-500 mr-auto">Today</p>
          <span className="font-bold text-2xl pb-2 text-teal-700">
            <Right />
          </span>
        </div>
        <div className="col-span-2">
          <ScrollShadow
            hideScrollBar
            className="flex max-h-[400px] overflow-x-scroll space-x-4"
            offset={100}
            orientation="horizontal"
          >
            {today.map((item, index) => (
              <Card
                key={index}
                isFooterBlurred
                className="border-none min-w-[300px]"
                radius="lg"
                onPress={() => console.log("item pressed")}
              >
                <CardBody>
                  <Link
                    isExternal
                    href="https://google.com"
                    showAnchorIcon
                    color="success"
                  >
                    <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-green-400">{item.title}</p>
                  </Link>
                </CardBody>
                <Image
                  isBlurred
                  alt={item.title}
                  className="object-cover"
                  height="300px"
                  shadow="sm"
                  src={item.img}
                  width="300px"
                />
              </Card>
            ))}
          </ScrollShadow>
        </div>
      </div>
      <div className="gap-3 grid grid-cols-3 sm:gap-7 mt-10">
        <div className="col-span-2">
          <ScrollShadow
            hideScrollBar
            className="flex max-h-[400px] overflow-x-scroll space-x-4"
            offset={100}
            orientation="horizontal"
          >
            {hot.map((item, index) => (
              <Card
                key={index}
                isFooterBlurred
                className="border-none min-w-[300px]"
                radius="lg"
                onPress={() => console.log("item pressed")}
              >
                <CardBody>
                  <Link
                    isExternal
                    href="https://google.com"
                    showAnchorIcon
                    color="danger"
                  >
                    <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-red-500">{item.title}</p>
                  </Link>
                </CardBody>
                <Image
                  isBlurred
                  alt={item.title}
                  className="object-cover"
                  height="300px"
                  shadow="sm"
                  src={item.img}
                  width="300px"
                />
              </Card>
            ))}
          </ScrollShadow>
        </div>
        <div className="col-span-1">
          <p className="font-bold text-5xl pb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 ml-auto">Hot</p>
          <p className="font-bold text-4xl pb-2 text-red-500 ml-auto">
            Picks
          </p>
          <span className="font-bold text-2xl pb-2 text-red-700">
            <Left />
          </span>
        </div>
      </div>

      <div className="mt-5 mb-40" />

      <div className="flex items-center justify-center">
        <p className="font-bold text-7xl pt-5 pb-5">My Feed</p>
      </div>

      <ScrollShadow
        hideScrollBar
        className="max-w-screen-xl max-h-[1000px] overflow-x-scroll relative"
        offset={100}
        orientation="horizontal"
      >
        <div className="gap-3 grid grid-cols-1 sm:grid-cols-3 sm:gap-7">
          {feed.map((item, index) => (
            <Card
              key={index}
              isFooterBlurred
              className="border-none"
              radius="lg"
              onPress={() => console.log("item pressed")}
            >
              <CardBody>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300">
                    {item.title}
                  </p>
                  <Button color="warning" content="Follow" style={{ width: '15px', height: '24px', fontSize: '12px'}} className="ml-auto">
                    Follow
                  </Button>
                </div>
              </CardBody>
              <Image
                isBlurred
                isZoomed
                className="object-cover"
                height="500px"
                shadow="sm"
                src={item.img}
                width="400px"
              />
              <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small z-10 w-60">
                <Button
                  className="mr-8"
                  color="default"
                  radius="lg"
                  size="md"
                  variant="flat"
                  onPress={() => setLiked((v) => !v)}
                >
                  <Heart
                    className={liked ? "[&>path]:stroke-transparent" : ""}
                    fill={liked ? "currentColor" : "none"}
                  />
                </Button>
                <Button
                  className="ml-8"
                  color="default"
                  radius="lg"
                  size="md"
                  variant="flat"
                >
                  <Download />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollShadow>

      <div className="mt-5 mb-40" />

      <div className="flex items-end flex-col justify-end">
        <p className="font-bold text-6xl pt-5 pb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-pink-500">
          Favourites
        </p>
        <p className="font-bold pb-5 text-neutral-500">Served by Brands</p>
      </div>

      <div className="max-w-screen-xl gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[300px]">
          <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://i.pinimg.com/564x/87/6a/71/876a71b3cc0761aa40ccbe6cf2e8fef0.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://i.pinimg.com/736x/5a/49/d1/5a49d1e6d180b4395f988e9d2533465d.jpg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Unsplash</p>
                <p className="text-tiny text-slate/60">Sparkle Collection</p>
              </div>
            </div>
            <Button radius="full" size="sm">
              ADD
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://i.pinimg.com/564x/44/54/6f/44546f6fa25369916229931b1127feba.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://vectorseek.com/wp-content/uploads/2023/08/Pexels-Logo-Vector.svg-.png"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Pexels</p>
                <p className="text-tiny text-slate/60">4k Wallpaper Boards</p>
              </div>
            </div>
            <Button radius="full" size="sm">
              ADD
            </Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[300px]">
          <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://i.pinimg.com/564x/74/72/01/747201e96e3291b63a2e392b327218b8.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://clipground.com/images/microsoft-clipart-for-mac-download-3.jpg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Freepik</p>
                <p className="text-tiny text-slate/60">Cool Vectors & PNG</p>
              </div>
            </div>
            <Button radius="full" size="sm">
              ADD
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full h-[300px] col-span-12 sm:col-span-5">
          <Image
            isZoomed
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://i.pinimg.com/564x/fe/c2/0d/fec20d2958059b8463bffb138d4eaac6.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://seeklogo.com/images/P/pixabay-logo-12A9CB7081-seeklogo.com.png"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Pixabay</p>
                <p className="text-tiny text-slate/60">Hot Picks from the bay</p>
              </div>
            </div>
            <Button radius="full" size="sm">
              ADD
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <Image
            isZoomed
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://i.pinimg.com/736x/ec/6f/16/ec6f16473d1a015b0308c7c8dd4c3c77.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://i.pinimg.com/564x/12/49/99/124999d723c1b34d7dcb3324c3bb0625.jpg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Pinterest</p>
                <p className="text-tiny text-slate/60">
                  Most Favourite Collection
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              ADD
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-5 mb-40" />

      <div className="flex flex-col justify-start">
        <p className="font-bold text-6xl pt-5 pb-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400">
          AI Discover
        </p>
        <p className="font-bold pb-5 text-neutral-500">Powered by Kawaii.ai</p>
      </div>

      <ScrollShadow
        hideScrollBar
        className="flex max-h-[400px] overflow-x-scroll space-x-4 w-full"
        offset={100}
        orientation="horizontal"
      >
        {ai.map((item, index) => (
          <Card
            key={index}
            isFooterBlurred
            className="border-none min-w-[300px]"
            radius="lg"
            onPress={() => console.log("item pressed")}
          >
            <Image
              isBlurred
              alt={item.title}
              className="object-cover"
              height="300px"
              shadow="sm"
              src={item.img}
              width="300px"
            />
            <CardFooter>
              <Button
                className="mr-5"
                radius="lg"
                size="md"
                variant="flat"
                onPress={() => setLiked((v) => !v)}
              >
                <Heart
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
              <Button
                className="mr-5"
                radius="lg"
                size="md"
                variant="flat"
                onPress={() => setReload((v) => !v)}
              >
                <Reload
                  className={reload ? "[&>path]:stroke-transparent" : ""}
                  fill={reload ? "currentColor" : "none"}
                />
              </Button>
              <Button radius="lg" size="md" variant="flat">
                <Download />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </ScrollShadow>
      <Divider className="mt-3 mb-3" />
      <ScrollShadow
        hideScrollBar
        className="flex max-h-[400px] overflow-x-scroll space-x-4 w-full"
        offset={100}
        orientation="horizontal"
      >
        {ai.map((item, index) => (
          <Card
            key={index}
            isFooterBlurred
            className="border-none min-w-[200px]"
            radius="lg"
            onPress={() => console.log("item pressed")}
          >
            <Image
              isBlurred
              alt={item.title}
              className="object-cover"
              height="200px"
              shadow="sm"
              src={item.img}
              width="200px"
            />
            <CardFooter>
              <Button
                className="mr-12"
                radius="lg"
                size="sm"
                variant="flat"
                onPress={() => setLiked((v) => !v)}
              >
                <Heart
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
              <Button className="" radius="lg" size="sm" variant="flat">
                <Download />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </ScrollShadow>

      <Accordion className="pt-20" defaultExpandedKeys={["theme"]}>
        <AccordionItem
          indicator={({ isOpen }) =>
            isOpen ? <Heart fill="red" /> : <Heart />
          }
          subtitle="Press to view Welcome Note"
          title="Everything Ends Here"
          variant="splitted"
        >
          <Code color="primary">
            Welcome to <strong>Kawaii</strong>
          </Code>
          <p className="pt-5 text-slate-500">
            Your ultimate spot for all things <strong>cute</strong> and{" "}
            <strong>aesthetic!</strong>
          </p>
          <p className="text-slate-500">
            share, pin, and connect with a community that gets you.
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
