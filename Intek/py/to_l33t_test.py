def to_l33t(string):
    return string.replace(['a', 'A'], '4').replace(['e', 'E'], '3').replace(
        ['i', 'I'], '1').replace(['o', 'O'], '0').replace(['u', 'U'], '8')

        
print(to_l33t("leetspeak, DUDE !"))
