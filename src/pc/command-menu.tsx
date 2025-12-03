'use client';

import { useState, useCallback, useEffect, Fragment } from "react";
import { Button } from "@/pc/components/button";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from "@/pc/components/command";

import {
  CodeIcon,
  CommandIcon,
  LinkIcon,
  UserCircleIcon
} from "lucide-react";

type CommandAction = {
  title: string;
  icon: React.ReactNode;
  onSelect: () => void;
};

type CommandGroupType = {
  name: string;
  actions: CommandAction[];
};

const CommandMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((v) => !v);
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  // --- Actions ---
  const copyCurrentUrl = async () => {
    closeMenu();
    await navigator.clipboard.writeText(window.location.href);
  };

  const openExternalLink = (url: string) => {
    closeMenu();
    window.open(url, "_blank", "noopener");
  };

  const goToAccount = () => {
    closeMenu();
    window.location.href = "/account";
  };

  // Keyboard shortcut CTRL/CMD + K
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      toggleMenu();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Fake groups (simple, no i18n)
  const groups: CommandGroupType[] = [
    {
      name: "General",
      actions: [
        { title: "Copy Current URL", icon: <LinkIcon />, onSelect: copyCurrentUrl },
        { title: "View Source Code", icon: <CodeIcon />, onSelect: () => openExternalLink("https://github.com/nelsonlaidev/nelsonlai.dev") }
      ]
    },
    {
      name: "Account",
      actions: [
        { title: "Account Settings", icon: <UserCircleIcon />, onSelect: goToAccount }
      ]
    }
  ];

  return (
    <>
      <Button variant="ghost" className="size-9 p-0" onClick={openMenu} aria-label="Open command menu">
        <CommandIcon />
      </Button>

      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Search actions..." />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {groups.map((group, index) => (
            <Fragment key={group.name}>
              <CommandGroup heading={group.name}>
                {group.actions.map((action) => (
                  <CommandItem key={action.title} onSelect={action.onSelect}>
                    {action.icon}
                    {action.title}
                  </CommandItem>
                ))}
              </CommandGroup>

              {index === groups.length - 1 ? null : <CommandSeparator />}
            </Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandMenu;
