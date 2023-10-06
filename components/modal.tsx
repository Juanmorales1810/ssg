import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { WhatsAppIcon } from "@/components/icons";
import { button as buttonStyles } from "@nextui-org/theme";

export default function Window(porps: any) {
    const items = porps.content;
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const route = useRouter();
    return (
        <div className="">
            <Button
                onPress={onOpen}
                variant="shadow"
                color="secondary"
                size="sm"
            >
                Details
            </Button>
            <Modal
                size="xl"
                backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1  text-black dark:text-white">
                                {items.title}
                            </ModalHeader>
                            <ModalBody className="flex sm:flex-row sm:gap-12">
                                <Image
                                    isBlurred
                                    width={240}
                                    src={items.img}
                                    alt={items.title}
                                    className="m-5"
                                />
                                <div className="w-60">
                                    <p className=" text-black dark:text-white">
                                        {items.description}
                                    </p>

                                    <p className=" text-black dark:text-white">
                                        {items.price}
                                    </p>
                                </div>
                            </ModalBody>
                            <ModalFooter className="mb-4">
                                <Button
                                    color="danger"
                                    variant="light"
                                    onClick={onClose}
                                >
                                    Close
                                </Button>
                                <Link
                                    isExternal
                                    as={NextLink}
                                    onPress={onClose}
                                    href={`https://api.whatsapp.com/send?phone=542646629632&text=Quiero%20informaci%C3%B3n%20sobre%20${items.title}!!😊😊`}
                                    className={buttonStyles({
                                        color: "secondary",
                                        radius: "full",
                                        variant: "shadow",
                                    })}
                                >
                                    <WhatsAppIcon />
                                    WhatsApp
                                </Link>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
